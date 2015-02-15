'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');
var pageDefaults = require('../constants/defaults').page;

var _page;
var isSidebarOpen;

var PageStore = new Store({

	// Gets metadata associated with the current page.
	getMetaData: function() {
		return _page || pageDefaults;
	},

	getSidebarStatus: function() {
		console.log('PageStore getSidebarStatus:', isSidebarOpen)
		return isSidebarOpen;
	}

});

PageStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;
	console.log('PageStore Dispatcher payload: ', payload)

	switch(action.actionType) {
		case pageConstants.SET_CURRENT_PAGE:
			console.log('PageStore action: SET_CURRENT_PAGE');
			_page = action.page;
    		PageStore.emitChange();
		break;
		case pageConstants.TOGGLE_SIDEBAR:
			console.log('PageStore action: TOGGLE_SIDEBAR');
			isSidebarOpen = !isSidebarOpen;
			PageStore.emitChange();
		break;
	}

});

module.exports = PageStore;
