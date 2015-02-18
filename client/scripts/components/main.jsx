var React = require('react');
var LayoutStore = require('../stores/layout');
var Router = require('react-router');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

    mixins: [ LayoutStore.mixin, Router.State ],
    getStoreData: function() {
        var name = this.getRoutes().reverse()[0].name;
        console.log('Route reverse', this.getRoutes().reverse()[0]);
        console.log('currentPage', name);

        return {
            currentLayout: LayoutStore.getCurrentLayout(name),
            currentPage: name
        }
    },
    getInitialState: function() {
        console.log('getInitialState');
        return this.getStoreData();
    },
    componentWillReceiveProps: function(){
        console.log('componentWillReceiveProps', this.getInitialState());
        this.setState(this.getStoreData()) // creates a double refresh for some reason
    },
    render: function() {
        console.log('App state', this.state);
        return (
            <ReactCSSTransitionGroup component="div" transitionName={this.state.currentLayout.transitionName}>
                <this.state.currentLayout.component className="layout" key={this.state.currentLayout.name}>
                    <ReactCSSTransitionGroup component="div" transitionName={this.state.currentLayout.transitionName}>
                        <RouteHandler className="page" key={this.state.currentPage} />
                    </ReactCSSTransitionGroup>
                </this.state.currentLayout.component>
            </ReactCSSTransitionGroup>
        );
    },

    _onChange: function() {
        console.log('App _onChange');
        this.setState(this.getStoreData())
    }
});

module.exports = App;