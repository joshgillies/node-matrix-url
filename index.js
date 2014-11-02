var url = require('url');

module.exports = function matrixUrl(opts) {
  var _opts = {};

  if (!opts)
    _opts = url.parse(href);
  if (opts && typeof opts.href === 'string')
    _opts = url.parse(opts.href);

  _opts.query = {
    'SQ_BACKEND_PAGE': 'main',
    backend_section: 'am',
    am_section: 'edit_asset',
    assetid: opts.assetId || '',
    asset_ei_screen: '',
    ignore_frames: '1'
  };

  return url.format(_opts);
};
