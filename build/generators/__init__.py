import os
import errno
from enum import Enum
from transformers import case, space


class TransformType(Enum):
    case = 0
    space = 1


class EnumGenerator(object):
    _transformer_by_transform_type = {
        TransformType.case: case,
        TransformType.space: space
    }

    class TermType(Enum):
        filename = 0
        section = 1
        category = 2
        element_name = 3
        element_value = 4

    def __init__(self, indent_string='    ', quote_char='"'):
        self.indent_string = indent_string
        self.quote_char = quote_char
        self.subpath = ''
        
        # This setup should be done by iterating over Term, except:
        # 1) Python 2 enum seems to require an __order__ attribute,
        #    that I don't want to maintain.
        # 2) PyCharm complains whether __order__ is defined or not:
        #    Expected collections.Iterable, got Term instead
        self.transform_strategies = {
            EnumGenerator.TermType.filename: {
                TransformType.case: case.Strategy.as_is,
                TransformType.space: space.Strategy.as_is
            },
            EnumGenerator.TermType.section: {
                TransformType.case: case.Strategy.as_is,
                TransformType.space: space.Strategy.as_is
            },
            EnumGenerator.TermType.category: {
                TransformType.case: case.Strategy.as_is,
                TransformType.space: space.Strategy.as_is
            },
            EnumGenerator.TermType.element_name: {
                TransformType.case: case.Strategy.as_is,
                TransformType.space: space.Strategy.as_is
            },
            EnumGenerator.TermType.element_value: {
                TransformType.case: case.Strategy.as_is,
                TransformType.space: space.Strategy.as_is
            }            
        }

    @classmethod
    def _transform(cls, string, transform_type, strategy):
        return cls._transformer_by_transform_type[transform_type]\
            .transform(string, strategy)

    def transform_term(self, string, term_type):
        result = string

        case_strategy = self.transform_strategies[term_type][TransformType.case]
        result = self._transform(result, TransformType.case, case_strategy)

        space_strategy = self.transform_strategies[term_type][TransformType.space]
        result = self._transform(result, TransformType.space, space_strategy)

        return result

    def enquote(self, string):
        return '{0}{1}{0}'.format(self.quote_char, string, self.quote_char)

