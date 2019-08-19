/* eslint-disable */
const { execSync } = require('child_process');

const p = require('../package.json');

const currentVersion = p.version;
const flowVersion = String(execSync('flow version')).match(/[\d\.]+/)[0];

const defaultDeclarations = execSync(
  `jscodeshift -s -t scripts/extractDefaultFlowTypes.js src/components/**/*.jsx src/components/layout/**/*.jsx --parser flow`
);

const componentDeclarations = execSync(
  `jscodeshift -s -t scripts/extractComponentFlowTypes.js src/components/**/*.jsx src/components/layout/**/*.jsx --parser flow`
);
const typeDec = execSync(`cat src/types.js`);

console.log(`
// flow-typed version: <<STUB>>/@wework-dev/plasma_v${currentVersion}/flow_v${flowVersion}

declare module '@wework-dev/plasma' {  
  ${String(typeDec).replace(/export/g, 'declare export')}
  
  ${String(defaultDeclarations)}

  declare export class CountedTextInput extends React$Component<{ ...$PropertyType<TextInput, 'props'>, counterClassName?: string }> { }
  declare export class CountedTextArea extends React$Component<{ ...$PropertyType<TextArea, 'props'>, counterClassName?: string }> { }

  declare export var LocationPin: string;
}

${String(componentDeclarations)}
`);
