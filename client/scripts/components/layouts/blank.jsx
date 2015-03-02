  'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');

var getState = function() {
    return {
        title: pageStore.getMetaData().title,
        isSidebarOpen: pageStore.getSidebarStatus()
    };
};

var BlankLayout = React.createClass({
    mixins: [pageStore.mixin],
    componentDidMount: function() {
        pageStore.emitChange();
    },
    getInitialState: function() {
        return getState();
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="layout blank">
                {this.props.children}
            </div>
            /* jshint ignore:end */
        );
    },
    // Event handler for 'change' events coming from store mixins.
    _onChange: function() {
        this.setState(getState());
    }
});

module.exports = BlankLayout;
