'use strict';

var React = require('react');
var Store = require('./default');
var Dispatcher = require('../dispatchers/default');
var pageConstants = require('../constants/page');

var Layouts = {
    DefaultLayout : React.createFactory(require('../components/layouts/default.jsx')),
    StaticLayout : React.createFactory(require('../components/layouts/static.jsx')),
    BlankLayout: React.createFactory(require('../components/layouts/blank.jsx'))
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
		name: 'BlankLayout',
		transitionName: 'filter',
		component: Layouts.BlankLayout
	},
	property: {
		name: 'StaticLayout',
		transitionName: 'property',
		component: Layouts.StaticLayout
	},
	list: {
		name: 'DefaultLayout',
		transitionName: 'list',
		component: Layouts.DefaultLayout
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
    },

    getScrollPos: function(component) {
    	return scrollPos[component];
    },

    statics: {
        willTransitionFrom: function(transition, component) {
            LayoutStore.setScrollPos('index', document.querySelector('.layout').scrollTop);
        },
        willTransitionTo: function() {
            setTimeout(function() {
                document.querySelector('.layout').scrollTop = LayoutStore.getScrollPos('index');
            }, 1)
        }
    },

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
