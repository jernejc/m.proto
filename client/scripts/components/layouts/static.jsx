'use strict';

var React = require('react');
var Navigation = require('react-router').Navigation;
var Button = React.createFactory(require('../modules/button.jsx'));

var StaticLayout = React.createClass({
    mixins: [Navigation],

    render: function() {
        return (
            /* jshint ignore:start */
                <div className="layout static">
                    <div className="main-container">
                        <Button className="btn-back" icon="arrow-left" onClick={this.historyBack}></Button>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            /* jshint ignore:end */
        );
    },
    historyBack: function(){
        history.back();
    }
});

module.exports = StaticLayout;