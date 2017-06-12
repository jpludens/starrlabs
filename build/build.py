import shutil
import errno
import os
import inspect


def copy(source, dist, ignore):
    try:
        shutil.copytree(source, dist, ignore=ignore)
    except OSError as e:
        if e.errno == errno.ENOTDIR:
            shutil.copy(source, dist)
        else:
            raise


def copy_over(source, destination, ignore):
    try:
        copy(source, destination, ignore)
    except OSError as e:
        if e.errno == errno.EEXIST:
            shutil.rmtree(destination)
            copy(source, destination, ignore)

if __name__ == "__main__":
    root = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))
    src = os.path.join(root, "..", "src")
    dst = os.path.join(root, "..", "dst")
    copy_over(src, dst, ignore=lambda d, files: [f for f in files
                                                 if '.js' in f
                                                 or f == 'index.tpl.html'])
