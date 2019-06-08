import React, { Component } from 'react';
import './Location.less';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadIndex: 10,
        };
        this.onChange = this.onChange.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { searchString } = nextProps;
        if (this.props.searchString !== searchString) {
            this.setState({
                loadIndex: 10
            });
        }
    }

    onChange(event) {
        const { value } = event.target;
        this.props.selectLocations(value);
    }

    loadMore() {
        this.setState({
            loadIndex: this.state.loadIndex + 10
        });
    }

    render() {
        const { data, selectLocations, selectedLocations, searchString } = this.props;
        const noResult = searchString && selectedLocations.length === 0;
        const displayData = selectedLocations.length > 0 ? selectedLocations : data;
        const { loadIndex } = this.state;

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
                        {displayData.slice(0, loadIndex).map((locationNode) => {
                            const { id, pincode, location } = locationNode;
                            return (
                                <div key={id} className="-location">
                                    <div className="-city">{location}</div>
                                    <div className="-pincode">{pincode}</div>
                                </div>
                            )
                        })}
                        {loadIndex < displayData.length &&
                            <div className="-load-more">
                                <button className="btn btn-primary -load" onClick={this.loadMore}>Load More</button>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}


export default Location;
