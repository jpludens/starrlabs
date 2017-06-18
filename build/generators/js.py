import os
from build import make_path
from build.generators import EnumGenerator, TransformType
from build.generators.transformers import case, space


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

    def generate_export_statement(self, name):
        category = self.transform_term(name, EnumGenerator.TermType.category)
        return 'export default {};\n'.format(category)

    def generate_file_contents(self, name, values):
        return self.generate_object_definition(name, values) +\
               self.generate_export_statement(name)

    def generate_file(self, js_path, name, values):
        path = os.path.join(js_path, self.subpath)
        make_path(path)
        filename = '{}.js'.format(
            self.transform_term(name, EnumGenerator.TermType.filename))
        filepath = os.path.join(path, filename)
        with open(filepath, 'w+') as f:
            f.write(self.generate_file_contents(name, values))
        return filepath
