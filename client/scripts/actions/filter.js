'use strict';

var Dispatcher = require('../dispatchers/default');
var filterConstants = require('../constants/filter');
var assign = require('object-assign');

module.exports = {

	toggle: function(direction) {
		console.log('toggle filter');
		Dispatcher.handleViewAction({
			actionType: filterConstants.TOGGLE
		});
	}

};
