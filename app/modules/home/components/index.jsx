import React from 'react';
import './home.less';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;
        return (
            <div className="home-dashboard">
                Home Page
            </div>
        );
    }
}

export default Home;
