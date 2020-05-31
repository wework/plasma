**PLASMA** _by WeWork_

### DEPRECATION NOTICE

Plasma is not longer under active development and is deprecated for internal use at WeWork.

For internal projects at WeWork please use [Dieter](https://github.com/WeConnect/dieter-ui) instead.

---

Plasma is a design system for creating sensible, modern interfaces.

Component docs at http://plasma.guide

Storybook at http://plasma.guide/dev/storybook

---

### IMPORTANT!

Select and Datepicker components do not work right now. Use `react-select` and datepicker directly in Spacestation.

## Developing with Storybook

Running Storybook

1. Run the Plasma Webpack dev server: `yarn start`
2. Run the Storybook server: `yarn storybook`
3. Go to [http://localhost:6006/](http://localhost:6006/) to view the Storybook

Developing with Storybook

1. Follow steps above "Running Storybook"
2. Create a new dev branch: `git checkout -b mybranch`
3. Add / update as necessary
4. Add stories to the `stories/` directory as you add / update components!

## Using the styleguide

### Running

1. Run `yarn run styleguide`.
2. Load up http://0.0.0.0:6060

### Building static version

1. Run `yarn run styleguide:build`
2. Files output to /styleguide

### Building flow-typed definitions

1. Run `yarn flow:buildTypeDefs`

This will output flow-typed compatible definitions of Flow types for Plasma. For Spacestation, you likely want to `yarn flow:buildTypeDefs | pbcopy` (if on Mac) and paste the contents to the `plasma_vx.x.x.js` under flow-typed/

### Documenting components

1. Run `./docs/publish.sh` from the root dir. This will update the docs, commit to gh-pages, and push to github (updating http://plasma.guide)

Info here: https://react-styleguidist.js.org/docs/documenting.html

## Creating a Pull Request / Publishing

### Creating a Pull Request

1. When you're ready, push your branch to Github and create a pull request.
2. If you've made visual changes, include screenshots.
3. If you've made implementation changes, run `yarn test:update` to update jest snapshots.
4. PR will be reviewed
5. When PR is accepted, it will be merged into master.
6. (Optional) If you also need to publish a new Plasma version, read that section.

### Publishing to NPM

1.  Create a separate PR or bump the npm version in the feature branch, do not publish from master.
2.  Run `yarn run pack` to bundle the .js and .css file into `/dist` folder.
3.  Run `npm version patch`. This will bump the version in package.json and create a new tag and push the tag to Github.
4.  Make sure you're logged in to NPM via `npm login`. login is in 1password, when prompted for email please use: dev-team@wework.com
5.  Run `npm publish` from the root directory to publish to NPM registry.
6.  Check https://www.npmjs.com/~wework-dev to make sure package is updated.

## Developing with Spacestation

### Link Plasma (you only need to do this once)

1. In your terminal, `cd` to local Plasma repo.
2. Run `yarn link`.
3. `cd` to local Spacestation repo.
4. Run `yarn link @wework-dev/plasma`. This creates a symlink in Spacestation's `node_modules/@wework-dev/plasma` folder that points to local Plasma repo.
5. (Optional) If you need to, you can unlink at any time with `yarn unlink @wework-dev/plasma`

### Developing with Spacestation

1. Create a new Plasma dev branch: `cd /plasma` `git checkout -b mybranch`
2. Run the Plasma dev server with watch: `yarn watch`
3. Save any changes in Plasma, webpack should bundle changes in `/dist`
4. Run Spacestion: `cd /spacestation` `yarn start`
5. Changes you make in Plasma should automatically be picked up by Spacestation
6. Follow "Creating a Pull Request / Publishing"

## Using a published Plasma version from NPM

1.  Run `yarn add @wework-dev/plasma` in your project.
2.  Include the Plasma object (or individual components) in your Javascript.
    Plasma object example:

    ```javascript
    import Plasma from '@wework-dev/plasma';
    <Plasma.Button label="Click it" />;
    ```

    Individual components example:

    ```javascript
    import { Button } from '@wework-dev/plasma';
    <Button label="Click it" />;
    ```

## Testing

For testing, Plasma uses Jest (https://facebook.github.io/jest/) with Enzyme (http://airbnb.io/enzyme/).

Tests are located in `src/tests`.

Flow coverage can be checked via `yarn flow:coverage`.

### Running tests

1. Run `yarn test` for a single run or `yarn test:watch` to watch for changes.
