'use strict';

var React = require('react');

var IndexComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="page index">
                <div className="spotlight">
                    <div className="fp-search">
                        <span className="logo">Logo</span>
                        <input type="text" className="search" placeholder="City, town, region.." />
                    </div>
                </div>
                <div className="agents">
                    <span></span>
                </div>
            </div>
            /* jshint ignore:end */
        )
    }
});

module.exports = IndexComponent;
