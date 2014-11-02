node-matrix-url
================

A helper library for working with Squiz Matrix URLs

Example
-------

```js
var href = matrixUrl({
  href: 'http://mysource.matrix/_admin',
  assetId: '3'
});

console.log(href);
// http://mysource.matrix/_admin/?SQ_BACKEND_PAGE=main&backend_section=am&am_section=edit_asset&assetid=3&asset_ei_screen=&ignore_frames=1
```

License
-------

MIT
