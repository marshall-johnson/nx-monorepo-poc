# Monorepo Using Nx

This project uses Nx to manage a modular front-end monorepo with Module Federation, Rspack, and Tailwind CSS support.

## Creating Applications

### Create a New Host Shell App
 ```sh
 nx g @nx/react:host --name=name-host-app --bundler=rspack --style=css --directory=apps/name-host-app --e2eTestRunner=none
 ```
After creation:
 -  Update the remotes and shared properties in module-federation.config.ts, similar to apps/host-shell/module-federation.config.ts.

### To create a new remote app
```sh
nx g @nx/react:remote --name=remote_app_name --host=host-shell --bundler=rspack --directory=apps/remote-app-name --style=css --e2eTestRunner=none
```

After creation:
 - Update the module-federation.config.ts file, similar to the host-shell app.

Tailwind & PostCSS Setup
 - Copy tailwind.config.cjs and postcss.config.cjs from the existing app to your new app.
 - Update the paths if needed.
 - Do not add new styles directly in those files. Use the shared configuration located in libs/shared/ui/tailwind.config.cjs.

### To generate a library
To generate a shared UI or theme library:
```sh
nx g @nx/react:lib --name=name-ui --directory=libs/shared/name-ui --importPath=@libs/shared/name-ui --style=css --builder=none
```

Existing Libraries
- theme – Handles light, dark, and system mode support with dynamic color updates.
- ui – Contains shared styles and components, such as Shadcn components or custom form inputs.

Key files:
- libs/shared/ui/tailwind.config.cjs
- libs/shared/ui/src/lib/styles.css

## Running Applications

### Run a single app
```sh
nx run app-name:serve
```
### Run multiple apps
```sh
nx run-many --target=serve --projects=app1,app2,app3 --parallel
```
### Run the host app
```sh
npm start
```

## Building Applications
```sh
nx build app_name
```
To skip Nx caching:
```sh
nx build app-name --skip-nx-cache
```

## Deploying

After deploying remote apps:
- Update the remoteEntry.js URL in the host app’s module-federation.config.ts.

Example:

CHART_REMOTE: char_remote_url/remoteEntry.js

Check the remotes property in the apps/host-shell/module-federation.config.ts file


## Scaling the Nx Monorepo

- Register new remotes in the host’s module-federation.config.ts
- Extract shared code into libs/shared/ui
- Configure dynamic loading or remote URLs via environment variables
- Leverage Nx caching and parallel builds in CI
- Deploy remotes independently and connect them via their remoteEntry URLs
