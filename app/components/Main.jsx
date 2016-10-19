import React, {Component} from 'react';
import Navbar from 'Navbar';

export default class Main extends Component {

    render() {
        return(
            <div>
                <Navbar />
                <h1>Main Component</h1>
                {this.props.children}
            </div>
        )
    }


}