var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 1,
      content: null
    };
  },
  selectTab: function (options) {
    this.setState(options);
  },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      return cloneWithProps(child, {
        active: (index === this.state.selectedTab),
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return (
      <div className="row tabWrapper">
        <ul className='tabs'>{children}</ul>
        <div className='tabs-content'>{this.state.content}</div>
      </div>
    );
  }
});

module.exports = Tabs;
Tabs.Tab = require('./tab');