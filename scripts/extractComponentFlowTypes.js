export default function extractDefaultFlowTypes(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.ClassDeclaration).forEach(() => {
    const componentName = file.path.match(/(\w+)\.jsx/)[1];
    const filePath = file.path.replace('src', 'lib').replace('.jsx', '');

    console.log(`
declare module "@wework-dev/plasma/${filePath}" {
  declare module.exports: $PropertyType<$Exports<"@wework-dev/plasma">, "${componentName}">;
}`);
  });
  return file.source;
}
