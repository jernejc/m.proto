'use strict';

var React = require('react/addons');
var Snap = require('./snap');
var pageStore = require('../../stores/page');

var snapper = null;

function getSidebarState() {
    return {
        isOpen: pageStore.getSidebarStatus()
    }
}

var SnapContent = React.createClass({
    mixins: [pageStore.mixin],
    getInitialState: function() {
        console.log('getInitialState SnapContent');
        return getSidebarState();
    },
    componentDidMount: function() {
        console.log('componentDidMount SnapContent');
        if(snapper == null) {
            snapper = new Snap({
                element: this.getDOMNode(),
                disable: 'right',
                tapToClose: false,
                transitionSpeed: 0.3,
                hyperextensible: false
            });
        }
    },
    componentWillUnmount: function(){
        snapper = null;
    },
    render: function() {
        console.log('render SnapContent: ', snapper);

        if(snapper != null) {
            if(this.state.isOpen){
                snapper.open('left');
            } else {
                snapper.close();
            }
        }

        return (
            <div className='snap-content'>
                {this.props.children}
            </div>
        );
    },

    _onChange: function() {
        this.setState(getSidebarState());
    },


});

module.exports = SnapContent;