const execSync = require('child_process').execSync;

const p = require('../package.json');

const currentVersion = p.version;
const flowVersion = String(execSync('flow version')).match(/[\d\.]+/)[0];

const declarations = execSync(
  `jscodeshift -s -t scripts/extractFlowTypes.js src/components/**/*.jsx src/components/layout/**/*.jsx --parser flow`
);

console.log(`
// flow-typed version: <<STUB>>/@wework-dev/plasma_v${currentVersion}/flow_v${flowVersion}

import type { ComponentType, ElementConfig, Node, Component } from 'react';

declare module '@wework-dev/plasma' {
  declare type Data = { key: string, value: string };

  ${String(declarations)
    .replace('ExternalSelect.propTypes', 'Object')
    .replace('ExternalDatePicker.propTypes', 'Object')}


  declare export class CountedTextInput extends React$Component<{ ...$PropertyType<TextInput, 'props'>, counterStyle: string }> { }
  declare export class CountedTextArea extends React$Component<{ ...$PropertyType<TextArea, 'props'>, counterStyle: string }> { }

  declare export var LocationPin: string;
}
`);
