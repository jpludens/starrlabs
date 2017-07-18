import os
from build import make_path
from build.generators import EnumGenerator, TransformType
from build.generators.transformers import case, space

# // DESIRED ADDL CODE
# const order = new Map([
#   [CARD_TYPE.SHIP, 1],
#   [CARD_TYPE.BASE, 2],
#   [CARD_TYPE.OUTPOST, 3]
# ]);
# const sortCardType = (a, b) => order.get(a) - order.get(b);
# // END DESIRED ADDL CODE

# export {CARD_TYPE, sortCardType};


class JsGenerator(EnumGenerator):
    def __init__(self, indent_string='  ', quote_char='\''):
        super(JsGenerator, self).__init__(indent_string, quote_char)
        self.subpath = os.path.join('static', 'js')
        self.transform_strategies = {
            EnumGenerator.TermType.filename: {
                TransformType.case: case.Strategy.camel,
                TransformType.space: space.Strategy.remove
            },
            EnumGenerator.TermType.category: {
                TransformType.case: case.Strategy.upper,
                TransformType.space: space.Strategy.to_underscore
            },
            EnumGenerator.TermType.element_name: {
                TransformType.case: case.Strategy.upper,
                TransformType.space: space.Strategy.to_underscore
            },
            EnumGenerator.TermType.element_value: {
                TransformType.case: case.Strategy.upper,
                TransformType.space: space.Strategy.to_underscore
            },
            EnumGenerator.TermType.suffix: {
                TransformType.case: case.Strategy.pascal,
                TransformType.space: space.Strategy.remove
            }
        }

    def generate_object_definition(self, name, values):
        category = self.transform_term(name, EnumGenerator.TermType.category)
        definition = 'const {} = {{\n'.format(category)
        for value in values:
            property_name = self.transform_term(
                value, EnumGenerator.TermType.element_name)
            property_value = self.enquote(self.transform_term(
                    value, EnumGenerator.TermType.element_value))
            property_declaration = '{}{}: {},\n'.format(
                self.indent_string, property_name, property_value)
            definition += property_declaration
        definition = definition[:-2] + '\n'  # Remove trailing comma
        definition += '};\n\n'
        return definition

    def generate_order_definition(self, name, values):
        definition = 'const order = new Map([\n'
        category = self.transform_term(name, EnumGenerator.TermType.category)
        for index, value in enumerate(values):
            element_name = self.transform_term(value, EnumGenerator.TermType.element_name)
            definition += '  [{}.{}, {}],\n'.format(category, element_name, index)
        definition = definition[:-2] + '\n'  # Remove trailing comma
        definition += ']);\n\n'
        return definition

    def generate_export_statement(self, name, other_exports=None):
        category = self.transform_term(name, EnumGenerator.TermType.category)
        statement = 'export {{{}'.format(category)
        if other_exports:
            for var in other_exports:
                statement += ', {}'.format(var)
        statement += '};\n'
        return statement

    def generate_file_contents(self, name, values, include_sort_function=False):
        contents = self.generate_object_definition(name, values)
        if include_sort_function:
            sort_function_name = 'sort{}'.format(
                self.transform_term(name, EnumGenerator.TermType.suffix))
            sort_function_definition = 'const {} = (a, b) => order.get(a) - order.get(b);\n\n'\
                .format(sort_function_name)
            contents += self.generate_order_definition(name, values) +\
                        sort_function_definition +\
                        self.generate_export_statement(name, [sort_function_name])
        else:
            contents += self.generate_export_statement(name)
        return contents

    def generate_file(self, js_path, name, values, include_sort_function=False):
        path = os.path.join(js_path, self.subpath)
        make_path(path)
        filename = '{}.js'.format(
            self.transform_term(name, EnumGenerator.TermType.filename))
        filepath = os.path.join(path, filename)
        with open(filepath, 'w+') as f:
            f.write(self.generate_file_contents(name, values, include_sort_function))
        return filepath
