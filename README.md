node-matrix-url
================

A helper library for working with Squiz Matrix URLs

[![build status](https://secure.travis-ci.org/joshgillies/node-matrix-url.svg)](http://travis-ci.org/joshgillies/node-matrix-url)

[![NPM](https://nodei.co/npm/node-matrix-url.png?downloads=true&stars=true)](https://nodei.co/npm/node-matrix-url/)

Example
-------

```js
var matrixUrl = require('node-matrix-url');
var href = matrixUrl('http://mysource.matrix/_admin', {
  assetId: '3'
});

console.log(href);
// http://mysource.matrix/_admin/?SQ_BACKEND_PAGE=main&backend_section=am&am_section=edit_asset&assetid=3&asset_ei_screen=&ignore_frames=1
```

License
-------

MIT
