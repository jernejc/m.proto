'use strict';

var React = require('react');
var If = require('../helpers/if.jsx');

var ButtonComponent = React.createClass({

    render: function() {
        return  <button onClick={this.props.onClick} className={this.props.className}>
                    <i className={"fi-" + this.props.icon}></i>
                    <If test={this.props.text}>
		                <span>{this.props.text}</span>
		            </If>
                </button>
    }

});

module.exports = ButtonComponent;
