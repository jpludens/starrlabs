from enum import Enum


class Strategy(Enum):
    as_is = 0
    upper = 1
    lower = 2
    camel = 3
    pascal = 4


def _transform_as_is(string):
    return string


def _transform_upper(string):
    return string.upper()


def _transform_lower(string):
    return string.lower()


def _transform_camel(string):
    return string[0].lower() + string.title()[1:]


def _transform_pascal(string):
    return string.title()

_method_mapping = {
    Strategy.as_is: _transform_as_is,
    Strategy.upper: _transform_upper,
    Strategy.lower: _transform_lower,
    Strategy.camel: _transform_camel,
    Strategy.pascal: _transform_pascal
}


def transform(string, strategy):
    return _method_mapping[strategy](string)
