const { execSync } = require('child_process');

export default function extractDefaultFlowTypes(file, { j, report }) {
  const root = j(file.source);

  root.find(j.TypeAlias).forEach(p => {
    const componentName = file.path.match(/(\w+)\.jsx/)[1];

    const { line, column } = p.value.id.loc.start;
    const { inexact } = p.value.right;

    const typeAtPosOutput = String(
      execSync(`flow type-at-pos ${file.path} ${line} ${column + 1} --quiet`)
    );

    const fullTypeDeclaration = typeAtPosOutput.split('\n')[0];
    const typeDeclarationRHS = fullTypeDeclaration.replace(/^type\s+\w+\s+=\s+/, '');

    if (!inexact) {
      fullTypeDeclaration.push('...');
    }

    let foundSomething = false;
    let log = `// source file: ${file.path}\n`;

    if (p.value.id.name === 'Props') {
      const capitalStaticKey = /^[A-Z]/;
      const classProps = root
        .find(j.ClassProperty)
        .filter(
          ({ value }) => value.static && value.key.name && capitalStaticKey.test(value.key.name)
        );

      const nodes = classProps.nodes();

      // declare export class ...
      log += `declare export class ${componentName} extends React$Component<${typeDeclarationRHS}> {
            ${nodes.map(node => `static ${node.key.name}: any;`).join('\n')}
        }\n`;
      foundSomething = true;
    } else if (p.value.id.name !== 'State') {
      // declare type ... = ...
      log += `declare ${fullTypeDeclaration}\n`;
      foundSomething = true;
    }

    log += '\n';

    if (foundSomething) {
      report(log);
    }
  });
  return file.source;
}
