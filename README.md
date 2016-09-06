**PLASMA** *by WeWork*

Plasma is a design system for creating sensible, modern interfaces.

[https://weconnect.github.io/plasma/docs](https://weconnect.github.io/plasma/docs)

---

## Developing locally

1.  Run `npm run dev` from the root directory.
2.  Server is now running.
    Component docs at [http://localhost:8080/plasma/docs](http://localhost:8080/plasma/docs).
    Playgrounds at [http://localhost:8080/plasma/playground3](http://localhost:8080/plasma/playground3)

## Publishing to NPM

1.  Bump version number in package.json as necessary.
2.  Make sure you're logged in to NPM via `npm login`.
3.  Run `npm run publish` from the root directory.
4.  Check https://www.npmjs.com/~wework-dev to make sure package is updated.

## Using Plasma

1.  Run `npm install @wework-dev/plasma --save` in your project.
2.  Link to correct version of CSS in your HTML <head>.
    Example:
    <link rel="stylesheet" href="https://npmcdn.com/@wework-dev/plasma@0.0.3-beta.1/style.css">
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

