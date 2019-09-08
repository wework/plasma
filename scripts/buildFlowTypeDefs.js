/* eslint-disable */
const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const globby = require('globby');
const path = require('path');
const workerBuilder = require('jscodeshift/dist/Worker');

const p = require('../package.json');

const currentVersion = p.version;
const flowVersion = String(execSync('flow version')).match(/[\d\.]+/)[0];

const workerOptions = {
  parser: 'flow',
  dry: true,
};

const extractTypes = (filePaths, transformationFile, options = workerOptions) =>
  new Promise(resolve => {
    let output = '';
    const files = [...filePaths];

    const worker = workerBuilder([path.join(__dirname, transformationFile), 'babel']);
    worker.on('disconnect', () => {
      // emitter is shared because of the module caching in node
      worker.removeAllListeners();
      resolve(output);
    });
    worker.on('message', message => {
      switch (message.action) {
        case 'report':
          output += `${message.msg}\n`;
          break;
        case 'free':
          const next = files.shift();
          worker.send({ files: next ? [next] : [], options });
          break;
      }
    });
    worker.send({ files: [files.shift()], options });
  });

const run = async () => {
  const files = (await globby(['src/components/**/*.jsx'])).sort();

  const defaultDeclarations = await extractTypes(files, 'extractDefaultFlowTypes');

  const componentDeclarations = await extractTypes(files, 'extractComponentFlowTypes');

  const typeDec = readFileSync(`src/types.js`);

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
};

run();
