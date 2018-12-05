export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.TypeAlias).forEach(p => {
    const componentName = file.path.match(/(\w+)\.jsx/)[1];
    if (p.value.id.name === 'Props') {
      // declare export class ...
      console.log(
        `declare export class ${componentName} extends React$Component<${j(
          p.value.right
        ).toSource()}> { }`
      );
    } else if (p.value.id.name !== 'State') {
      // declare type ... = ...
      console.log(`declare ${j(p.value).toSource()}`);
    } else {
      console.log(p);
    }
  });
  return file.source;
}
