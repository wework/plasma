var fs = require('fs');
var mkdirp = require('mkdirp');

const pages = [
  '', // main index
  'components',
  'playground'
];

export default function html(metadata) {
  const buildToPath = `${__dirname}/static`;
  let urlRoot = '/live/';
  if (process.env.BUILD === 'true') {
    urlRoot = '/plasma/';
  }
  const html = `<!doctype html>\
    <html>\
      <head>\
        <meta charset='UTF-8'>\
        <title>Plasma</title>\
        <link rel='stylesheet' type='text/css' href='${urlRoot}styles.css'>\
        <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js'></script>\
        <script src='//cdn.jsdelivr.net/jquery.color-animation/1/mainfile'></script>\
        <script>\
          window.DOCDATA = ${JSON.stringify(metadata)};\
        </script>\
      </head>\
      <body>\
        <div id='app' style='min-height: 100%; height: 100%;'></div>\
        <script src='${urlRoot}bundle.js'></script>\
      </body>\
    </html>`;

  pages.forEach((page, index) => {
    const path = `${buildToPath}/${page}`;
    mkdirp(path, () => {
      fs.writeFile(`${path}/index.html`, html);
    });
  });
}