import _ from 'lodash';
import glob from 'glob';
import fsp from 'fs-promise';
import promisify from './promisify';

let globp = promisify(glob);

var reactDocs = require('react-docgen');

const basePath = '/../src/components/';

export default function generate() {
  return globp(__dirname + `${basePath}**/*.js`)
    .then( files => {
      console.log(files);
      let results = files.map(
        filename => fsp.readFile(filename).then(content => reactDocs.parse(content)));
      return Promise.all(results)
        .then( data => {
          const obj = {};
          _.forEach(data, (compMeta, index) => {
            if (compMeta.displayName) {
              obj[compMeta.displayName] = compMeta;
            } else {
              throw new Error('Component is missing displayName');
            }
          });
          console.log(obj);
          return obj;
        })
        .catch( e => setTimeout(()=> { throw e; }));
    });
}