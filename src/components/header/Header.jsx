import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src="/images/KENZAP.svg" width="105" height="32" alt=""/>
                    </a>                       
                    <form className="form-inline mr-auto">
                            <input className="search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars toggler-icon"></i>
                    </button>                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>                        
                    </div>
                </nav>
            </div>
        )
    }
}
