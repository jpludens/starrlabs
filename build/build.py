import shutil
import errno
import os
import inspect


def copy(src, dst):
    try:
        shutil.copytree(src, dst)
    except OSError as e:
        if e.errno == errno.ENOTDIR:
            shutil.copy(src, dst)
        else:
            raise


def copy_over(source, destination):
    try:
        copy(source, destination)
    except OSError as e:
        if e.errno == errno.EEXIST:
            shutil.rmtree(destination)
            copy(source, destination)

if __name__ == "__main__":
    root = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))
    src = os.path.join(root, "..", "src")
    dst = os.path.join(root, "..", "dst")
    copy_over(src, dst)
