import React, { Component } from 'react';
import Location from './Location/Location';
import WorldMap from './WorldMap/WorldMap';
import './home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;
        console.log(data)
        return (
            <div className="home-dashboard container">
                <div className="row">
                    <div className="col-sm-6">
                        <Location />
                    </div>
                    <div className="col-sm-6">
                        <WorldMap />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
