var fs = require('fs');
var mkdirp = require('mkdirp');

const pages = [
  '', // main index
  'docs',
  'playground3',
  'playground4',
];

export default function html(metadata) {
  const buildToPath = `${__dirname}/static`;
  let urlRoot = '/live/';
  console.log(process.env.BUILD);
  if (process.env.BUILD === 'true') {
    urlRoot = '/plasma/';
  }
  console.log(urlRoot);
  const html = `<!doctype html>\
    <html>\
      <head>\
        <meta charset='UTF-8'>\
        <title>Plasma</title>\
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.css'>\
        <link rel='stylesheet' type='text/css' href='${urlRoot}styles.css'>\
        <script src='//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js'></script>\
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