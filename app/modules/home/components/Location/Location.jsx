import React, { Component } from 'react';
import './Location.less';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const { value } = event.target;
        this.props.selectLocations(value);
    }

    render() {
        const { data, selectLocations, selectedLocations, searchString } = this.props;
        const noResult = searchString && selectedLocations.length === 0;
        const displayData = selectedLocations.length > 0 ? selectedLocations : data;

        return (
            <div className="location-dashboard">
                <div className="-search-container">
                    <input className="-search-bar" name="locator" onChange={this.onChange} value={searchString}/>
                </div>
                {noResult ?
                    <div className="-result">
                        No Results found
                    </div> :
                    <div className="-result">
                        {displayData.map((locationNode) => {
                            const { id, pincode, location } = locationNode;
                            return (
                                <div key={id} className="-location">
                                    <div className="-city">{location}</div>
                                    <div className="-pincode">{pincode}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}


export default Location;
