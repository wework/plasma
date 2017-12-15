# base64 image loader for webpack

![](https://travis-ci.org/jahredhope/base64-image-loader.svg?branch=master)

Easily switched out for a url loader this loader can be injected directly into an img src tag

If your looking for a loader that simple encodes as base64 try [base64-loader](https://github.com/antelle/base64-loader)

## Installation

`npm install base64-image-loader`

## Usage

``` javascript
var fileAsBase64Src = require("base64-image!./file.png");
document.write('<img src="' + fileAsBase64Src + '" />';
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Support

See ./mimes.json for currently supported extensions/mimes.  
Create a Pull Request if you need more added.  

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
