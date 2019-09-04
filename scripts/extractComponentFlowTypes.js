export default function extractDefaultFlowTypes(file, { j, report }) {
  const root = j(file.source);
  let hasDeclaration = false;

  root.find(j.ClassDeclaration).forEach(() => {
    hasDeclaration = true;
    const componentName = file.path.match(/(\w+)\.jsx/)[1];
    const filePath = file.path.replace('src', 'lib').replace('.jsx', '');

    report(`
declare module "@wework-dev/plasma/${filePath}" {
  declare module.exports: $PropertyType<$Exports<"@wework-dev/plasma">, "${componentName}">;
}`);
  });

  if (!hasDeclaration) {
    root.find(j.VariableDeclaration).forEach(() => {
      const componentName = file.path.match(/(\w+)\.jsx/)[1];
      const filePath = file.path.replace('src', 'lib').replace('.jsx', '');

      report(`
declare module "@wework-dev/plasma/${filePath}" {
  declare module.exports: $PropertyType<$Exports<"@wework-dev/plasma">, "${componentName}">;
}`);
    });
  }

  return file.source;
}
