'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var listConstants = require('../constants/list');

var _items = [];

var ListStore = new Store({

	getAll: function() {
		console.log('ListStore getAll:', _items)
		return _items;
	}

});

ListStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;
	console.log('ListStore Dispatcher payload: ', payload)

	switch(action.actionType) {
		case listConstants.GET_ALL:
			console.log('ListStore action: GET_ALL');
			console.log('Action', action);
			_items = action.items;
			ListStore.emitChange();
		break;
	}

});

module.exports = ListStore;
