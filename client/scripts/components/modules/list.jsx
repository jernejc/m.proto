'use strict';

var React = require('react/addons');
var listStore = require('../../stores/list');
var listActions = require('../../actions/list');
var Button = React.createFactory(require('../modules/button.jsx'));
var ListItem = React.createFactory(require('../modules/listItem.jsx'));

function getListState() {
    return {
        items: listStore.getAll()
    }
}

console.log('listActions.getAll()');
listActions.getAll();

var ListComponent = React.createClass({
    mixins: [listStore.mixin],
    
    statics: {
        willTransitionTo: function(transition, params, query) {
            console.warn("willTransitionTo list", transition, params, query);
        },

        willTransitionFrom: function(transition, component) {
            console.warn("willTransitionFrom list", transition, component);
        }
    },

    getInitialState: function() {
        return getListState();
    },

    render: function() {
        console.log('list render', this.state.items);
        var allItems = this.state.items;
        var items = [];

        for (var key in allItems) {
            items.push(<ListItem key={key} item={allItems[key]} />);
        }
        
        return (
            /* jshint ignore:start */
            <div className="items">
                {items}
            </div>
            /* jshint ignore:end */
        );
    },

    _onChange: function() {
        console.log('list _onChange props:', getListState());
        this.setState(getListState());
    }

});

module.exports = ListComponent;
