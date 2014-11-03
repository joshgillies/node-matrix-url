var test = require('tape');
var url = require('url');
var matrixUrl = require('../');

var defaults = {
  href: 'http://matrix.dev/_admin'
};

test('Basic functionality', function(t) {
  var search = [
    '?SQ_BACKEND_PAGE=main',
    '&backend_section=am',
    '&am_section=edit_asset',
    '&assetid=',
    '&asset_ei_screen=',
    '&ignore_frames=1'
  ].join('');

  t.equal(matrixUrl(defaults.href), defaults.href + search, 'URL as String');
  t.equal(matrixUrl(url.parse(defaults.href)), defaults.href + search, 'URL Object');
  t.end();
});

test('Screen value shorthand', function(t) {
  var search = [
    '?SQ_BACKEND_PAGE=main',
    '&backend_section=am',
    '&am_section=edit_asset',
    '&assetid=3',
    '&asset_ei_screen=',
    '&ignore_frames=1',
    '&log_manager_3_direct_connection=true',
    '&log_manager_3_action=monitor',
    '&log_manager_3_log=error',
    '&rand=',
    '&log_manager_3_num_lines=25',
    '&log_manager_3_offset='
  ].join('');

  defaults.screen = 'log';
  t.equal(matrixUrl(defaults), defaults.href + search, 'Default log screen');
  delete defaults.screen;
  t.end();
});
