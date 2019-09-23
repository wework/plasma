const { execSync } = require('child_process');

const getNodeTypedef = (file, node) => {
  try {
    const { line: nodeLine, column: nodeColumn } = node.loc.start;
    const nodeTypeAtPosOutput = String(
      execSync(`flow type-at-pos ${file.path} ${nodeLine} ${nodeColumn + 1} --quiet`)
    );

    const nodeTypeDeclaration = nodeTypeAtPosOutput.split('\n')[0];
    const nodeTypeDeclarationRHS = nodeTypeDeclaration.replace(/^type\s+\w+\s+=\s+/, '');

    return nodeTypeDeclarationRHS;
  } catch (error) {
    return `any /* ${error.message} */`;
  }
};

export default function extractDefaultFlowTypes(file, { j, report }) {
  const root = j(file.source);

  root.find(j.TypeAlias).forEach(p => {
    const componentName = file.path.match(/(\w+)\.jsx/)[1];

    const { line, column } = p.value.id.loc.start;

    const typeAtPosOutput = String(
      execSync(`flow type-at-pos ${file.path} ${line} ${column + 1} --quiet`)
    );

    const fullTypeDeclaration = typeAtPosOutput.split('\n')[0];
    const typeDeclarationRHS = fullTypeDeclaration.replace(/^type\s+\w+\s+=\s+/, '');
    let foundSomething = false;
    let log = `// source file: ${file.path}\n`;

    if (p.value.id.name === 'Props') {
      const classProps = root.find(j.ClassProperty).filter(({ value }) => value.static);

      const nodes = classProps.nodes();

      // declare export class ...
      log += `declare export class ${componentName} extends React$Component<${typeDeclarationRHS}> {
            ${nodes
              .map(node => `static ${node.key.name}: ${getNodeTypedef(file, node.key)};`)
              .join('\n')}
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
