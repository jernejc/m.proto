'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');
var Snap = require('./snap');


function getSidebarState() {
    return {
        isOpen: pageStore.getSidebarStatus()
    }
}

var SideBarComponent = React.createClass({
    mixins: [pageStore.mixin],

    getInitialState: function() {
        return getSidebarState();
    },
    render: function() {
        var cx = React.addons.classSet;
        var classString = cx({
            'sidebar': true,
            'open': this.state.isOpen
        });

        return (
            /* jshint ignore:start */
            <ul className={classString}>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
            /* jshint ignore:end */
        );
    },

    _onChange: function() {
        this.setState(getSidebarState());
    }

});

module.exports = SideBarComponent;
