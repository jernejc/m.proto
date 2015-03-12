'use strict';

var React = require('react');
var ListComponent = React.createFactory(require('./modules/list.jsx'));
var LayoutStore = require('../stores/layout.js');
var Button = React.createFactory(require('./modules/button.jsx'));
var Spotlight = React.createFactory(require('./modules/spotlight.jsx'));
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
            console.log('layout scrollTop', document.querySelector('.layout').scrollTop)
            LayoutStore.setScrollPos('index', document.querySelector('.layout').scrollTop);
        },
        willTransitionTo: function(transition, component) {
            setTimeout(function() {
                document.querySelector('.layout').scrollTop = LayoutStore.getScrollPos('index');
            }, 1)
        }
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="page index">
                <Spotlight />
                <div className="offer-listing">
                    <div className="offer-list">
                        <ListComponent />
                    </div>
                    <MediaQuery minDeviceWidth={768} id="map">
                        <Map className="map-canvas" initialZoom={10} onClick={handleClick} initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
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
