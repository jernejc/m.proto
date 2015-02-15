'use strict';

var keyMirror = require('keymirror');

var pageConstants = keyMirror({

  // Page action types
  SET_CURRENT_PAGE: null,
  TOGGLE_SIDEBAR: 'toggle_sidebar'

});

module.exports = pageConstants;

