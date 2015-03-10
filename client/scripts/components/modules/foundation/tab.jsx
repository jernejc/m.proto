var React = require('react');
var cx = require('react/lib/cx');

var Tab = React.createClass({
  componentDidMount: function () {
    if (this.props.active) {
      this.select();
    }
  },
  select: function () {
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    this.props.selectTab(options);
  },
  render: function () {
    var classes = {
      'tab-title': true,
      'active': this.props.active
    };
    return (
      <li className={cx(classes)} onClick={this.select}>
        <a title="{this.props.title}">{this.props.title}</a>
      </li>
    );
  }
});

module.exports = Tab;