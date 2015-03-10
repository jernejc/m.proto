'use strict';

var React = require('react');
var ListComponent = React.createFactory(require('./modules/list.jsx'));
var LayoutStore = require('../stores/layout.js');
var Button = React.createFactory(require('./modules/button.jsx'));
var Navigation = require('react-router').Navigation;

var MediaQuery = require('react-responsive');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

function handleClick(e) {
    console.log('Clicked at position', e.latLng);
}

var IndexComponent = React.createClass({
    mixins: [Navigation],
    statics: {
        willTransitionFrom: function(transition, component) {
            LayoutStore.setScrollPos('index', document.querySelector('.offer-list').scrollTop);
        },
        willTransitionTo: function(transition, component) {
            setTimeout(function() {
                document.querySelector('.offer-list').scrollTop = LayoutStore.getScrollPos('index');
            }, 1)
        }
    },
    render: function() {


        return (
            /* jshint ignore:start */
            <div className="page index">
                <div className="spotlight">
                    <div className="fp-search">
                        <span className="logo">Logo & Slogan or something</span>
                        <div>
                            <input type="text" className="search" placeholder="City, town, region.." />
                            <Button className="filter-btn" icon="magnifying-glass" onClick={this.filter} />
                        </div>
                    </div>
                </div>
                <div className="offer-listing">
                    <div className="offer-list">
                        <ListComponent />
                    </div>
                    <MediaQuery minDeviceWidth={768} id="map">
                        <Map className="map-canvas" initialZoom={10} initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
                            <Marker onClick={handleClick} position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)} />
                        </Map>
                    </MediaQuery>
                </div>
            </div>
            /* jshint ignore:end */
        )
    },

    filter: function() {
        this.transitionTo('filter');
    }
});

module.exports = IndexComponent;
