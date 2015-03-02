'use strict';

var React = require('react');
var Router = require('react-router');
var Button = React.createFactory(require('./modules/button.jsx'));
var LayoutStore = require('../stores/layout');

var PropertyComponent = React.createClass({
    mixins: [ Router.State ],
    statics: {
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
