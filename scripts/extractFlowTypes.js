const { execSync } = require('child_process');

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.TypeAlias).forEach(p => {
    const componentName = file.path.match(/(\w+)\.jsx/)[1];

    const { line, column } = p.value.id.loc.start;

    const typeAtPosOutput = String(
      execSync(`flow type-at-pos ${file.path} ${line} ${column + 1} --quiet`)
    );

    const fullTypeDeclaration = typeAtPosOutput.split('\n')[0];
    const typeDeclarationRHS = fullTypeDeclaration.replace(/^type\s+\w+\s+=\s+/, '');

    if (p.value.id.name === 'Props') {
      // declare export class ...
      console.log(
        `declare export class ${componentName} extends React$Component<${typeDeclarationRHS}> { }`
      );
    } else if (p.value.id.name !== 'State') {
      // declare type ... = ...
      console.log(`declare ${fullTypeDeclaration}`);
    }

    console.log('\n');
  });
  return file.source;
}
