'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');

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
            <div className={classString}>
                
            </div>
            /* jshint ignore:end */
        );
    },

    _onChange: function() {
        this.setState(getSidebarState());
    }

});

module.exports = SideBarComponent;
