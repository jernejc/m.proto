'use strict';

var React = require('react/addons');

var SnapDrawerLeft = React.createClass({
    render: function() {
        return (
            <div className='snap-drawer snap-drawer-left'>
                {this.props.children}
            </div>
        );
    }
});

module.exports = SnapDrawerLeft;