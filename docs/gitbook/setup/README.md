# Getting started

To get up and running developing with Plasma, follow these instructions:

#### Important note

````
Select and Datepicker components do not work right now.
Use react-select and datepicker directly in Spacestation.
````

### Links

* Storybook: http://plasma.guide/storybook
* Components: http://plasma.guide/components

---

## Storybook

### Running Storybook

* Run the Plasma Webpack dev server: `yarn start`
* Run the Storybook server: `yarn storybook`
* Go to [http://localhost:6006/](http://localhost:6006/) to view the Storybook.

### Developing with Storybook

* Follow steps above for "Running Storybook".
* Create a new dev branch: `git checkout -b mybranch`
* Add/update as necessary.
* Add stories to the `stories/` directory as you add/update components!

---

## Using the styleguide

### Running

* Run `yarn run styleguide`
* Load up: http://0.0.0.0:6060

### Building static version

* Run `yarn run styleguide:build`
* Files output to `/styleguide`.

### Documenting components

Info here: https://react-styleguidist.js.org/docs/documenting.html

---

## Creating a pull request / publishing

### Creating a pull request

* When you're ready, push your  branch to Github and create a pull request.
* If you've made visual changes, include screenshots.
* PR will be reviewed.
* When PR is accepted, it will be merged into master.
* (Optional) If you also need to publish a new Plasma version, read that section.

### Publishing to NPM

* Only publish from master and make sure you `git pull origin` the latest from master.
* Run `yarn run pack` to bundle the .js and .css file into `/dist` folder.
* Run `npm version patch`. This will bump the version in package.json and create a new tag and push the tag to Github.
* Make sure you're logged in to NPM via `npm login`
* Run `npm publish` from the root directory to publish to NPM registry.
* Check https://www.npmjs.com/~wework-dev to make sure package is updated.

---

## Developing with Spacestation

### Link Plasma (you only need to do this once)

* In your terminal, `cd` to local Plasma repo.
* Run `yarn link`
* `cd` to local Spacestation repo.
* Run `yarn link @wework-dev/plasma`. This creates a symlink in Spacestation's `node_modules/@wework-dev/plasma` folder that points to local Plasma repo.
* (Optional) If you need to, you can unlink at any time with `yarn unlink @wework-dev/plasma`

### Developing with Spacestation

* Create a new Plasma dev branch: `cd /plasma` `git checkout -b mybranch`
* Run the Plasma dev server with watch: `yarn watch`
* Run Spacestion: `cd /spacestation` `yarn start`
* Changes you make in Plasma should automatically be picked up by Spacestation.
* Follow "Creating a Pull Request / Publishing".

### Using a published Plasma version from NPM

* Run `yarn add @wework-dev/plasma` in your project.
* Include the Plasma object (or individual components) in your Javascript.

#### Plasma object example:

```
javascript
import Plasma from '@wework-dev/plasma';
<Plasma.Button label='Click it'/>
```
#### Individual components example:

```
javascript
import { Button } from '@wework-dev/plasma';
<Button label='Click it'/>
```
