'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var filterConstants = require('../constants/filter');

var isOpen;

var FilterStore = new Store({

	getStatus: function() {
		return isOpen;
	}

});

FilterStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;

	switch(action.actionType) {
		case filterConstants.TOGGLE:
			console.log('FilterStore action: TOGGLE_SIDEBAR');
			isOpen = !isOpen;
			FilterStore.emitChange();
		break;
	}

});

module.exports = FilterStore;
