'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');


var SideBarComponent = React.createClass({
    mixins: [pageStore.mixin],
    render: function() {
        var cx = React.addons.classSet;
        var classString = cx({
            'sidebar': true
        });

        return (
            /* jshint ignore:start */
            <ul className={classString}>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
            /* jshint ignore:end */
        );
    }

});

module.exports = SideBarComponent;
