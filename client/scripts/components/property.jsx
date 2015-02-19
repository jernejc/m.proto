'use strict';

var React = require('react');
var Router = require('react-router');
var Button = React.createFactory(require('./modules/button.jsx'));
var LayoutStore = require('../stores/layout');

var PropertyComponent = React.createClass({
    mixins: [ Router.State ],
    statics: {
        willTransitionTo: function(transition, params, query) {
            console.log("willTransitionTo property", transition, params, query);
        },

        willTransitionFrom: function(transition, component) {
            console.log("willTransitionFrom property", transition, component);
            LayoutStore.setCustomAnimation('goList');
        }
    },
    render: function() {
        var propertyId = this.getParams().propertyId;
        console.log('propertyID', propertyId);

        return (
            /* jshint ignore:start */
            <div className="page property">
                propertyId: {propertyId}
                <div className="image">

                </div>
            </div>
            /* jshint ignore:end */
        )
    },
    filter: function() {
        
    }
});

module.exports = PropertyComponent;
