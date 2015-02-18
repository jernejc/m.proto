'use strict';

var keyMirror = require('keymirror');

var pageConstants = keyMirror({

  // Page action types
  SET_CURRENT_PAGE: null,
  TOGGLE_SIDEBAR: 'toggle_sidebar',
  TRANSITION_LAYOUT: 'transition_layout'

});

module.exports = pageConstants;

