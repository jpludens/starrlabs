import os
import shutil
from build import make_path

files = [
    os.path.join('app', '__init__.py'),
    os.path.join('app', 'starrlabs.py')
]


def copy_files(origin_path, destination_path):
    print "Copying files..."
    for filename in files:
        origin_file = os.path.join(origin_path, filename)
        destination_file = os.path.join(destination_path, filename)
        make_path(os.path.dirname(destination_file))
        print '  From: {}'.format(origin_file)
        print '  To:   {}'.format(destination_file)
        shutil.copyfile(origin_file, destination_file)

if __name__ == "__main__":
    #############################################################
    # This lets imports work when running from command line
    import sys
    this_path = os.path.dirname(os.path.realpath(__file__))
    sys.path.append(os.path.join(this_path, '..'))
    #############################################################
    from build import source_path, distribution_path
    copy_files(source_path, distribution_path)
