import React, { Component } from 'react';
import './PresentationImages.scss';

export default class PresentationImages extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="main-image">
                        <img src={process.env.PUBLIC_URL + "/images/Image01.svg"} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="thrumbnails">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/images/Image01.svg"} className="rounded float-left img-thumbnai secondary-image" alt="..." />
                            <img src={process.env.PUBLIC_URL + "/images/Image02.svg"} className="rounded float-left img-thumbnai secondary-image" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="presentation-share">
                        <div>
                            <div className="presentation-share-text">Share this service:</div>
                            <a href="https://www.facebook.com/" className="share-link facebook">
                                <img src={process.env.PUBLIC_URL + "/images/Facebook.svg"} alt="" />
                            </a>
                            <a href="https://www.twitter.com/" className="share-link twitter">
                                <img src={process.env.PUBLIC_URL + "/images/Twitter.svg"} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/" className="share-link linkedin">
                                <img src={process.env.PUBLIC_URL + "/images/Linkedin.svg"} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
