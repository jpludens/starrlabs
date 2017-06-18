if __name__ == "__main__":
    #############################################################
    # This lets imports work when running from command line
    import os, sys
    this_path = os.path.dirname(os.path.realpath(__file__))
    sys.path.append(os.path.join(this_path, '..'))
    #############################################################

    import code_distributor
    import definition_generator
    from build import source_path, distribution_path, generation_path

    code_distributor.copy_files(source_path, distribution_path)
    definition_generator.generate(generation_path)
