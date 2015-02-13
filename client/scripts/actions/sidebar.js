'use strict';

var Dispatcher = require('../dispatchers/default');
var sideBarConstants = require('../constants/sidebar');
var assign = require('object-assign');

module.exports = {

  toggle: function() {
  	console.log('sidebarActions open');
    Dispatcher.handleViewAction({
      actionType: sideBarConstants.TOGGLE
    });
  }

};
