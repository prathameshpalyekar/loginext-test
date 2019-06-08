import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './WorldMap.less';

class WorldMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;

        return (
            <div className="map-container">
                <LeafletMap
                    center={[50, 10]}
                    zoom={1}
                    maxZoom={10}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                        {data.map((locationNode) => {
                            const { id, latitude, longitude, location, pincode } = locationNode;
                            return (
                                <Marker position={[latitude, longitude]} key={id}>
                                    <Popup>
                                        <div>Pin-code: {pincode}</div>
                                        <div>City: {location}</div>
                                        <div>Latitude: {latitude}</div>
                                        <div>Longitude: {longitude}</div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                </LeafletMap>
            </div>
        );
    }
}


export default WorldMap;
