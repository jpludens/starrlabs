import os
import build.generators.js
import build.generators.sass
from data.sr_enums import js_enums, sass_enums, ordered_categories


def generate(path):
    print 'Creating definition files at {}'.format(path)

    print '  Creating js...'
    js_generator = build.generators.js.JsGenerator()
    for name, values in js_enums.items():
        include_sort_function = name in ordered_categories
        filename = js_generator.generate_file(path, name, values, include_sort_function)
        print '    Created definition for {} in {}'.format(name, filename)

    print '  Creating sass...'
    sass_generator = build.generators.sass.SassGenerator()
    variables_filepath = sass_generator.generate_variables_file(path, sass_enums)
    print '    Created generated variables at {}'.format(variables_filepath)

if __name__ == "__main__":
    #############################################################
    # This lets imports work when running from command line
    import sys
    this_path = os.path.dirname(os.path.realpath(__file__))
    sys.path.append(os.path.join(this_path, '..'))
    #############################################################
    from build import generation_path
    generate(generation_path)
