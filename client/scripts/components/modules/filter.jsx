'use strict';

var React = require('react/addons');
var filterStore = require('../../stores/filter');
var filterActions = require('../../actions/filter')
var Button = React.createFactory(require('../modules/button.jsx'));

function getFilterState() {
    return {
        isOpen: filterStore.getStatus()
    }
}

var filterComponent = React.createClass({
    mixins: [filterStore.mixin],

    getInitialState: function() {
        return getFilterState();
    },

    render: function() {
        var cx = React.addons.classSet;
        var classString = cx({
            'filter': true,
            'open': this.state.isOpen
        });

        return (
            /* jshint ignore:start */
            <div className={classString}>
                <h3>Filter properties <Button icon="x" className="close" onClick={this.toggle}/></h3>
                <input className="city" type="text" />
            </div>
            /* jshint ignore:end */
        );
    },

    _onChange: function() {
        console.log('filter _onChange props:', getFilterState());
        this.setState(getFilterState());
    },

    toggle: function() {
        filterActions.toggle();
    }

});

module.exports = filterComponent;
