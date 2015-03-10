'use strict';

var React = require('react');
var Router = require('react-router');
var Button = React.createFactory(require('./modules/button.jsx'));
var LayoutStore = require('../stores/layout');
var ListStore = require('../stores/list');
var Tabs = require('./modules/foundation/tabs');

var PropertyComponent = React.createClass({
    mixins: [ LayoutStore.mixin, Router.State ],
    statics: {
        willTransitionFrom: function(transition, component) {
            LayoutStore.setCustomAnimation('front'); 
        }
    },
    getInitialState: function() {
        return {id: "1", title: "Title of the property", description: "Subtitle or short description for the property", price: "500.000", agent: "Some agent"};
    },
    componentDidMount:function(){
        var item = ListStore.getProperty(this.getParams().propertyId);

        console.log('tabs', this.refs.tabs.getDOMNode());
        this.setState(item);
    },
    render: function() {
        console.log('Property state', this.state);
        return (
            /* jshint ignore:start */
            <div className="page property">
                <div className="row slider">
                    <div className="price">{this.state.price}€</div>
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

                <Tabs>
                    <Tabs.Tab title='Description'>
                        <p>1 Integer vitae dolor rhoncus erat mattis lobortis. Proin hendrerit dolor luctus, vulputate eros at, elementum ipsum. Phasellus eget erat ornare, egestas sem vitae.</p>
                    </Tabs.Tab>
                    <Tabs.Tab title='Details'>
                        <p>2 Integer vitae dolor rhoncus erat mattis lobortis. Proin hendrerit dolor luctus, vulputate eros at, elementum ipsum. Phasellus eget erat ornare, egestas sem vitae.</p>
                    </Tabs.Tab>
                    <Tabs.Tab title='Other'>
                        <p>3 Integer vitae dolor rhoncus erat mattis lobortis. Proin hendrerit dolor luctus, vulputate eros at, elementum ipsum. Phasellus eget erat ornare, egestas sem vitae.</p>
                    </Tabs.Tab>
                </Tabs>

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
