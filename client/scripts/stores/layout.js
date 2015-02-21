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
		name: 'DefaultLayout',
		transitionName: 'filter',
		component: Layouts.DefaultLayout
	},
	property: {
		name: 'StaticLayout',
		transitionName: 'property',
		component: Layouts.StaticLayout
	}
}

var scrollPos = [];
var customAnimation = null;
var LayoutStore = new Store({

	getCurrentLayout: function(name) {
        if(customAnimation) {
            var customLayoutRoutes = mapLayoutsRoutes[name] || mapLayoutsRoutes['default'],
                currentLayout = {
                    name: customLayoutRoutes.name,
                    transitionName: customAnimation,
                    component: customLayoutRoutes.component
                };

            customAnimation = null;

            return currentLayout;
        } else {
		    return mapLayoutsRoutes[name] || mapLayoutsRoutes['default'];
        }
	},
	
    setCustomAnimation: function(animationName){
        customAnimation = animationName;
    },

    setScrollPos: function(component, pos) {
    	scrollPos[component] = pos;
    	console.log('setScrollPos scrollPos: ', scrollPos);
    },

    getScrollPos: function(component) {
    	return scrollPos[component];
    }

});

LayoutStore.dispatcherToken = Dispatcher.register(function(payload) {

	var action = payload.action;

	switch(action.actionType) {
		case pageConstants.TRANSITION_LAYOUT:
    		LayoutStore.emitChange();
		break;
	}

});

module.exports = LayoutStore;
