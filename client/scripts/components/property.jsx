'use strict';

var React = require('react');
var Router = require('react-router');
var Button = React.createFactory(require('./modules/button.jsx'));
var LayoutStore = require('../stores/layout');

var PropertyComponent = React.createClass({
    mixins: [ LayoutStore.mixin, Router.State ],
    statics: {
        willTransitionTo: function(transition, params, query) {
            console.log("willTransitionTo property");
        },

        willTransitionFrom: function(transition, component) {
            LayoutStore.setCustomAnimation('front');
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
