**PLASMA** *by WeWork*

Plasma is a design system for creating sensible, modern interfaces.

[https://weconnect.github.io/plasma/docs](https://weconnect.github.io/plasma/docs)

---

## Developing locally

1. Run the Plasma dev server: `yarn start`
2. Run the Storybook server: `yarn storybook`
3. Go to [http://localhost:6006/](http://localhost:6006/) to view the Storybook
4. Add stories to the `stories/` directory as you build/modify components!

## Publishing to NPM

1.  Bump version number in package.json as necessary.
2.  Make sure you're logged in to NPM via `npm login`.
3.  Run `yarn publish` from the root directory.
4.  Check https://www.npmjs.com/~wework-dev to make sure package is updated.

## Using Plasma

1.  Run `yarn add @wework-dev/plasma` in your project.
2.  Link to correct version of CSS in your HTML <head>.
    Example:
    
    ```html
    <link rel="stylesheet" href="https://npmcdn.com/@wework-dev/plasma@0.0.3-beta.1/style.css">
    ```
3.  Include the Plasma object (or individual components) in your Javascript.
    Plasma object example:
    ```javascript
    import Plasma from '@wework-dev/plasma';
    <Plasma.Button label='Click it'/>
    ```
    
    Individual components example:
    ```javascript
    import { Button } from '@wework-dev/plasma';
    <Button label='Click it'/>
    ```
