var url = require('url');
var extend = require('xtend');

module.exports = function matrixUrl(href, opts) {
  var _opts = {};
  opts = opts || {};

  if (typeof href === 'object')
    opts = href;

  if (typeof href === 'string')
    _opts = url.parse(href);

  if (typeof opts.href === 'string')
    _opts = url.parse(opts.href);

  _opts.query = {
    SQ_BACKEND_PAGE: 'main',
    backend_section: 'am',
    am_section: 'edit_asset',
    assetid: opts.assetId || '',
    asset_ei_screen: '',
    ignore_frames: '1'
  };

  if (/log/.test(opts.screen)) {
    _opts.query = extend(_opts.query, {
      assetid: '3',
      log_manager_3_direct_connection: 'true',
      log_manager_3_action: 'monitor',
      log_manager_3_log: opts.level || 'error',
      rand: opts.rand || '',
      log_manager_3_num_lines: opts.lines || '25',
      log_manager_3_offset: opts.offset || ''
    });
  }

  return url.format(_opts);
};
