import React, { Component } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div>
                        <div className="container-fluid jumbotron-body">
                            <h1 className="display-4">Hello, world!</h1>
                            <div className="btn btn-primary btn-lg my-4" role="button">
                                <Link to="/service"><span className="link-service">Go to service</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
