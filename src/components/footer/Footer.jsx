import React, { Component } from 'react';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-xl-4">
                                <div className="about">
                                    <div className="about-logo">
                                        <img src="/images/Logo.svg" alt="" />
                                    </div>
                                    <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Eiusmod tempor incididunt ut labore.</div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-xl-8">
                                <div className="footer-nav-wrapper">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-4 col-xl-4">
                                            <div className="tech">
                                                <div className="tech-header">KENZAP.TECH</div>
                                                <div className="hr"></div>
                                                <div className="tech-text">
                                                    <div>Website Templates</div>
                                                    <div>Mobile Applications</div>
                                                    <div>Desktop</div>
                                                    <div>Applications</div>
                                                    <div>Web Programming</div>
                                                    <div>IT Support</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4 col-xl-4">
                                            <div className="popular">
                                                <div className="popular-header">POPULAR</div>
                                                <div className="hr"></div>
                                                <div className="popular-text">
                                                    <div>WordPress</div>
                                                    <div>Bug Fixing</div>
                                                    <div>React.js</div>
                                                    <div>Web Application</div>
                                                    <div>Backup and Migration</div>
                                                    <div>Chatbots</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4 col-xl-4">
                                            <div className="resources">
                                                <div className="resources-header">RESOURCES</div>
                                                <div className="hr"></div>
                                                <div className="resources-text">
                                                    <div>Dashboard</div>
                                                    <div>Affiliate</div>
                                                    <div>Freelacers</div>
                                                    <div>Help Center</div>
                                                    <div>Kenzap Blog</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row bottom">
                            <div className="col-xs-12 col-md-6">
                                <div className="social">
                                    <div className="social-icons">
                                        <div className="social-icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </div>
                                        <div className="social-icon">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="social-icon">
                                            <i className="fab fa-linkedin-in"></i>
                                        </div>
                                    </div>
                                    <div className="copyright">© 2020 All Rights Reserved.</div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="switches">
                                    <div className="language">
                                        <div className="dropdown">
                                            <div className="language-dropdown" data-toggle="dropdown" id="dropdownMenu">
                                                <div>
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div className="dropdown-text">Language</div>
                                                <div>
                                                    <i className="fas fa-chevron-down"></i>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                                <a className="dropdown-item dropdown-text">English</a>
                                                <a className="dropdown-item dropdown-text">Italian</a>
                                                <a className="dropdown-item dropdown-text">Ukrainian</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="currency">
                                        <div className="dropdown">
                                            <div className="currency-dropdown" data-toggle="dropdown" id="dropdownMenu">
                                                <div>
                                                    <i className="fas fa-dollar-sign"></i>
                                                </div>
                                                <div className="dropdown-text">Currency</div>
                                                <div>
                                                    <i className="fas fa-chevron-down"></i>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                                <a className="dropdown-item dropdown-text">Dollar</a>
                                                <a className="dropdown-item dropdown-text">UAH</a>
                                                <a className="dropdown-item dropdown-text">Euro</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
