'use strict';

var React = require('react');
var Navigation = require('react-router').Navigation;

var StaticLayout = React.createClass({
    mixins: [Navigation],

    render: function() {
        return (
            /* jshint ignore:start */
                <div className="layout default">
                    <div className="main-container">
                        <a href="javascript:history.back();">back</a>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = StaticLayout;