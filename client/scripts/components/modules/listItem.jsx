var React = require('react');

var ListItem = React.createClass({

    componentDidMount: function() {
        console.log('List item, componentDidMount');
    },

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function() {
        var item = this.props.item;

        return (
            <div className="item">
                <div className="image">
                    <span className="price">{item.price}€</span>
                    <span className="agent">{item.agent}</span>
                </div>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
            </div>
        );
    }

});

module.exports = ListItem;