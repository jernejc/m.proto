'use strict';

var React = require('react');

var DefaultComponent = React.createClass({
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

module.exports = DefaultComponent;