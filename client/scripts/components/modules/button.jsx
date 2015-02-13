'use strict';

var React = require('react');

var ButtonComponent = React.createClass({

    render: function() {
        return  <button onClick={this.props.onClick}>
                    <i className={"fi-" + this.props.icon}></i>
                    <span>{this.props.text}</span>
                </button>
    }

});

module.exports = ButtonComponent;
