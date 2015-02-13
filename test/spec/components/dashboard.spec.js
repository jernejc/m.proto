/*jshint newcap:false */
/* jshint -W024 */
/* jshint expr:true */

'use strict';

var React = require('react');
var Dashboard = React.createFactory(require('../../../client/scripts/components/dashboard.jsx'));

var ReactTestUtils;
var reactRender;

beforeEach(function() {
  ReactTestUtils = require('react/addons').addons.TestUtils;
  reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component: Dashboard', function() {
  it('Should run a few assertions', function() {

  });
});
