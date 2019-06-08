import React, { Component } from 'react';
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
                WorldMap
            </div>
        );
    }
}


export default WorldMap;
