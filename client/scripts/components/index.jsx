'use strict';

var React = require('react');
var ListComponent = React.createFactory(require('./modules/list.jsx'));

var IndexComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="page index">
                <div className="spotlight">
                    <div className="fp-search">
                        <span className="logo">Logo & Slogan or something</span>
                        <input type="text" className="search" placeholder="City, town, region.." />
                    </div>
                </div>
                <ListComponent />
            </div>
            /* jshint ignore:end */
        )
    }
});

module.exports = IndexComponent;
