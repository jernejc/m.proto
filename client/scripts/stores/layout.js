'use strict';

var React = require('react');
var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');

var Layouts = {
    DefaultLayout : React.createFactory(require('../components/layouts/default.jsx')),
    StaticLayout : React.createFactory(require('../components/layouts/static.jsx'))
};

var mapLayoutsRoutes = {
	default: {
		name: 'DefaultLayout',
		transitionName: 'default',
		component: Layouts.DefaultLayout
	},
	dashboard: {
		name: 'StaticLayout',
		transitionName: 'staticPage',
		component: Layouts.StaticLayout
	},
	filter: {
		name: 'StaticLayout',
		transitionName: 'filter',
		component: Layouts.StaticLayout
	},
	property: {
		name: 'StaticLayout',
		transitionName: 'property',
		component: Layouts.StaticLayout
	},
	list: {

	}
}

var LayoutStore = new Store({

	getCurrentLayout: function(name) {
		return mapLayoutsRoutes[name] || mapLayoutsRoutes['default'];
	}

});

LayoutStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;
	console.log('LayoutStore Dispatcher payload: ', payload)

	switch(action.actionType) {
		case pageConstants.TRANSITION_LAYOUT:
			console.log('PageStore action: SET_CURRENT_PAGE');
    		LayoutStore.emitChange();
		break;
	}

});

module.exports = LayoutStore;
