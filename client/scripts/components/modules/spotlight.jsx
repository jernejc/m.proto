'use strict';

var React = require('react');
var Button = React.createFactory(require('./button.jsx'));

var SpotlightComponent = React.createClass({
    componentWillMount: function(){
        window.addEventListener('scroll', this.onScroll, false);
    },
    getInitialState: function() {
		return {
			style: {
				height: '300px'
			}
		}
	},
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="spotlight">
                <div className="fp-search">
                    <span className="logo">Logo & Slogan or something</span>
                    <div>
                        <input type="text" className="search" placeholder="City, town, region.." />
                        <Button className="filter-btn" icon="magnifying-glass" onClick={this.filter} />
                    </div>
                </div>
            </div>
            /* jshint ignore:end */
        )
    },

    onScroll: function(e) {
  		var height = height - document.querySelector('.layout').scrollTop;
  		console.log('onScroll', height);

        this.setState({
	      style: {
	        height: height
	      }
	    });
    }   
    
});

module.exports = SpotlightComponent;
