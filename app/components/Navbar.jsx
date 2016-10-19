import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router'          


export default class Navbar extends Component {

    render() {
        return(
            <div>
                <h1>I am a nav component</h1>
                <Link to="/">Home</Link>
                <Link to="/edit">Edit</Link>
                <IndexLink to="/admin"></IndexLink>
            </div>
        )
    }


}