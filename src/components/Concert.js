import React, {Component} from 'react';
import './fakeData'

var axios = require('axios');

class Concert extends Component {
    

    getInitialState() {
    return {
        concerts: []
        }
    }

    componentDidMount() {
    var th = this;
    
    //var axios = require('axios');
    this.serverRequest =
    axios.get(this.props.source)
            .then(function(result) {
                th.setState({
                    concerts: result.data.concerts
                });
            })
}

    componentWillUnmount() {
    this.serverRequest.abort();
}

    render(){
        return (
            <div>
                <h1>Concerts!</h1>
                {this.state.concerts.map(function(concert) {
                    return (
                        <div key={concert.id} className="concert">
                            <a href="placeholder.asp">
                                {concert.name}
                                has a price of
                                {concert.price}
                            </a>
                        </div>
                    );
                })}
            </div>
        )

    }

}

export default Concert