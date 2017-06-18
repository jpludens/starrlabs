from enum import Enum


class Strategy(Enum):
    as_is = 0
    remove = 1
    to_underscore = 2
    to_hyphen = 3


def _transform_as_is(string):
    return string


def _transform_remove(string):
    return string.replace(' ', '')


def _transform_to_underscore(string):
    return string.replace(' ', '_')


def _transform_to_hyphen(string):
    return string.replace(' ', '-')

_method_by_strategy = {
    Strategy.as_is: _transform_as_is,
    Strategy.remove: _transform_remove,
    Strategy.to_underscore: _transform_to_underscore,
    Strategy.to_hyphen: _transform_to_hyphen
}


def transform(string, strategy):
    return _method_by_strategy[strategy](string)