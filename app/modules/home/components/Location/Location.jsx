import React, { Component } from 'react';
import './Location.less';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;
        return (
            <div className="location-dashboard">
                Location
            </div>
        );
    }
}


export default Location;
