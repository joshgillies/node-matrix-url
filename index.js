var url = require('url');
var extend = require('xtend');
var crypto = require('crypto');

var getHipoJob = function getHipoJob(action, assetId) {
  var hash = crypto.createHash('md5').update(assetId).digest('hex');

  return {
    'acquireLocks': 'hipo_job_acquire_locks-' + hash,
    'regenerateDesign': 'hipo_job_regenerate_design-' + hash
  }[action || 'acquireLocks'];
};

var matrixUrl = function matrixUrl(href, opts) {
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
    ignore_frames: '1',
    sq_asset_path: opts.assetPath || ''
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

  if (/hipo/.test(opts.screen)) {
    _opts.query = extend(_opts.query, {
      SQ_ACTION: 'hipo',
      hipo_source_code_name: getHipoJob(opts.action, opts.assetId)
    });
  }

  return url.format(_opts);
};

module.exports = matrixUrl;
