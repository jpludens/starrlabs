import os
import errno
import inspect

here = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))

source_root = os.path.join('..', 'src')
generation_root = os.path.join('..', 'gen')
distribution_root = os.path.join('..', 'dst')

source_path = os.path.abspath(os.path.join(here, source_root))
generation_path = os.path.abspath(os.path.join(here, generation_root))
distribution_path = os.path.abspath(os.path.join(here, distribution_root))


def make_path(path):
    try:
        os.makedirs(path)
    except OSError as e:
        if e.errno == errno.EALREADY:
            pass
