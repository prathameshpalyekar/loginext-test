import React, { Component } from 'react';
import Location from './Location/Location';
import WorldMap from './WorldMap/WorldMap';
import './home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocations: [],
            searchString: '',
        };
        this.selectLocations = this.selectLocations.bind(this);
    }

    selectLocations(search) {
        const selectedLocations = this.props.data.filter((location) => {
            return location.pincode.toLowerCase().includes(search.toLowerCase());
        })
        this.setState({
            searchString: search,
            selectedLocations,
        });
    }

    render() {
        const { data } = this.props;
        const { selectedLocations, searchString } = this.state;

        return (
            <div className="home-dashboard">
                <div className="row">
                    <div className="col-sm-6">
                        <Location
                            data={data}
                            selectLocations={this.selectLocations}
                            selectedLocations={selectedLocations}
                            searchString={searchString}
                        />
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
