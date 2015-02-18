var React = require('react');
var Navigation = require('react-router').Navigation;

var ListItem = React.createClass({
    mixins: [Navigation],

    componentDidMount: function() {
        console.log('List item, componentDidMount');
    },

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function() {
        var item = this.props.item;

        return (
            <div className="item" onClick={this.goToItem} id={item.id}>
                <div className="image">
                    <span className="price">{item.price}€</span>
                    <span className="agent">{item.agent}</span>
                </div>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
            </div>
        );
    },

    goToItem: function(e) {
        console.log("goToItem event", e);
        this.transitionTo('property', {propertyId: e.currentTarget.id});
    }

});

module.exports = ListItem;