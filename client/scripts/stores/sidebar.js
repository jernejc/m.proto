'use strict';

var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var sideBarConstants = require('../constants/sidebar');

var isOpen;

var SideBarStore = new Store({
	getStatus: function() {
		console.log('SideBarStore getStatus:', isOpen)
		return isOpen;
	}
});

SideBarStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;

	switch(action.actionType) {
		case sideBarConstants.TOGGLE:
			console.log('SideBarStore action: TOGGLE');
			isOpen = !isOpen;
			SideBarStore.emitChange();
		break;
	}

});

module.exports = SideBarStore;
