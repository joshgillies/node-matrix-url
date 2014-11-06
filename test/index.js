var test = require('tape');
var matrixUrl = require('../');

var DEFAULTS = {
  href: 'http://matrix.dev/_admin/'
};

var testRunner = function testRunner(test) {
  this.equal(test.test, DEFAULTS.href + test.search, test.description);
};

test('Basic functionality', function(t) {
  DEFAULTS.search = [
    '?SQ_BACKEND_PAGE=main',
    '&backend_section=am',
    '&am_section=edit_asset',
    '&assetid=',
    '&asset_ei_screen=',
    '&ignore_frames=1'
  ];
  var tests = [
    {
      description: 'URL as String',
      search: DEFAULTS.search.join(''),
      test: matrixUrl(DEFAULTS.href)
    },
    {
      description: 'URL Object',
      search: DEFAULTS.search.join(''),
      test: matrixUrl(DEFAULTS)
    },
    {
      description: 'Setting assetId',
      search: [
        '?SQ_BACKEND_PAGE=main',
        '&backend_section=am',
        '&am_section=edit_asset',
        '&assetid=3',
        '&asset_ei_screen=',
        '&ignore_frames=1'
      ].join(''),
      test: matrixUrl({ href: DEFAULTS.href, assetId: 3 })
    }
  ];

  tests.forEach(testRunner, t);
  t.end();
});

test('Screen value shorthand', function(t) {
  DEFAULTS.search = [
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
  ];
  var tests = [
    {
      description: 'Default log screen',
      search: DEFAULTS.search.join(''),
      test: matrixUrl({
        href: DEFAULTS.href,
        screen: 'log'
      })
    },
    {
      description: 'Log screen with settings',
      search: [
        '?SQ_BACKEND_PAGE=main',
        '&backend_section=am',
        '&am_section=edit_asset',
        '&assetid=3',
        '&asset_ei_screen=',
        '&ignore_frames=1',
        '&log_manager_3_direct_connection=true',
        '&log_manager_3_action=monitor',
        '&log_manager_3_log=system',
        '&rand=123456',
        '&log_manager_3_num_lines=1000',
        '&log_manager_3_offset=654321'
      ].join(''),
      test: matrixUrl({
        href: DEFAULTS.href,
        screen: 'log',
        level: 'system',
        rand: '123456',
        lines: '1000',
        offset: '654321'
      })
    },
    {
      description: 'Cannot override log screen assetId',
      search: DEFAULTS.search.join(''),
      test: matrixUrl({
        href: DEFAULTS.href,
        screen: 'log',
        assetId: '23'
      })
    },
  ];

  tests.forEach(testRunner, t);
  t.end();
});
