import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'connections_remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (library, defaultConfig) => {
    if (
      library === '@hookform/resolvers' ||
      library === '@hookform/resolvers/zod'
    ) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: false,
        eager: true,
        requiredVersion: '^5.1.1',
      };
    }

    return {
      ...defaultConfig,
      eager: true,
    };
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
