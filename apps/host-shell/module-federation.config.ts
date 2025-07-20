import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host-shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  // remotes: ['connections_remote', 'charts', 'section_cards'],
  remotes: [
    process.env.CONNECTION_REMOTE
      ? [
          'connections_remote',
          process.env.CONNECTION_REMOTE || 'connections_remote',
        ]
      : 'connections_remote',
    process.env.CHART_REMOTE
      ? ['charts', process.env.CHART_REMOTE || 'charts']
      : 'charts',
    process.env.SECTION_CARD_REMOTE
      ? ['section_cards', process.env.SECTION_CARD_REMOTE || 'section_cards']
      : 'section_cards',
  ],
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
  additionalShared: [
    [
      '@shared/auth',
      {
        singleton: true,
        eager: true,
        requiredVersion: false,
      },
    ],
  ],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
