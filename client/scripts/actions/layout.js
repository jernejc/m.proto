'use strict';

var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');
var assign = require('object-assign');

module.exports = {

	transitionLayout: function(transitionName) {
		Dispatcher.handleViewAction({
			actionType: pageConstants.TRANSITION_LAYOUT,
			transition: transitionName
		});
	}

};
