import os
from build import make_path
from build.generators import EnumGenerator, TransformType
from build.generators.transformers import case, space


class SassGenerator(EnumGenerator):
    def __init__(self, indent_string='', quote_char='"'):
        super(SassGenerator, self).__init__(indent_string, quote_char)
        self.subpath = os.path.join('static', 'sass')
        self.transform_strategies = {
            EnumGenerator.TermType.category: {
                TransformType.case: case.Strategy.pascal,
                TransformType.space: space.Strategy.as_is
            },
            EnumGenerator.TermType.element_name: {
                TransformType.case: case.Strategy.lower,
                TransformType.space: space.Strategy.to_hyphen
            },
            EnumGenerator.TermType.element_value: {
                TransformType.case: case.Strategy.upper,
                TransformType.space: space.Strategy.to_underscore
            }
        }

    def generate_file_contents(self, definitions):
        result = ''
        for name, values in definitions.items():
            category = self.transform_term(
                name, EnumGenerator.TermType.category)
            result += '// {} declarations from SassGenerator\n'.format(category)
            prefix = self.transform_term(
                name, EnumGenerator.TermType.element_name)
            for value in values:
                name_transform = self.transform_term(
                    value, EnumGenerator.TermType.element_name)
                value_transform = self.transform_term(
                    value, EnumGenerator.TermType.element_value)
                result += '${}-{}: {};\n'.format(
                    prefix, name_transform, self.enquote(value_transform))
            result += '\n'
        return result

    def generate_variables_file(self, sass_path, definitions):
        path = os.path.join(sass_path, self.subpath, 'abstract')
        make_path(path)
        filepath = os.path.join(path, '_generated_variables.scss')
        with open(filepath, 'w+') as f:
            f.write(self.generate_file_contents(definitions))
        return filepath

