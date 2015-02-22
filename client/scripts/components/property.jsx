'use strict';

var React = require('react');
var Router = require('react-router');
var Button = React.createFactory(require('./modules/button.jsx'));
var LayoutStore = require('../stores/layout');
var ListStore = require('../stores/list');

var PropertyComponent = React.createClass({
    mixins: [ LayoutStore.mixin, Router.State ],
    statics: {
        willTransitionFrom: function(transition, component) {
            LayoutStore.setCustomAnimation('front'); 
        }
    },
    componentDidMount:function(){
        var item = ListStore.getProperty(this.getParams().propertyId);
        console.log('property data', item);
        this.setState(item);
    },
    render: function() {
        var item = this.props;

        return (
            /* jshint ignore:start */
            <div className="page property">
                <div className="row slider">
                    <div className="price">500.000€</div>
                    <div className="image"></div>
                    <div className="nav">
                        <span className="bullet"></span>
                        <span className="bullet"></span>
                        <span className="bullet active"></span>
                        <span className="bullet"></span>
                        <span className="bullet"></span>
                        <span className="bullet"></span>
                    </div>
                </div>
                <div className="row details">
                    <div className="title">

                    </div>
                    <div className="buttons">
                        <Button text="Favorite" icon="star" className="favorite" />
                        <Button text="Contact" icon="telephone" />
                    </div>
                </div>
                <div className="row tabs">
                    <span className="active">Description</span>
                    <span>Details</span>
                    <span>Other</span>
                </div>
                <div className="row content">
                    Integer vitae dolor rhoncus erat mattis lobortis. Proin hendrerit dolor luctus, vulputate eros at, elementum ipsum. Phasellus eget erat ornare, egestas sem vitae.
                </div>
                <div className="row agent">
                    <div className="image"></div>
                    <span>Agent Info</span><br />
                    <small>Integer vitae dolor rhoncus erat mattis lobortis. Proin hendrerit dolor luctus.</small>
                </div>
                <div className="row map">
                    <img src="images/map.png" />
                </div>
            </div>
            /* jshint ignore:end */
        )
    },
    filter: function() {
        
    }
});

module.exports = PropertyComponent;
