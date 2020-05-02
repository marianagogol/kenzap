import React, { Component } from 'react';
import './Description.scss'

export default class Description extends Component {
    render() {
        return (
            <div>
                <div className="service-details">
                    <div className="service-menu-box">
                        <div className="service-menu">
                            <div className="description-menu-button" onClick={this.onDescriptionClick}>DESCRIPTION</div>
                            <div className="reviews-menu-button" onClick={this.onReviewsClick}>REVIEWS</div>
                            <div className="faqs-menu-button" onClick={this.onFaqsClick}>FAQS</div>

                        </div>
                    </div>
                </div>
                
                <div className="description">
                    <div className="description-body-box">
                        <div className="description-body">
                            <div className="description-details-text">
                                <h6>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem in cumque voluptatem qui recusandae!</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit debitis quos soluta autem saepe quaerat quo perferendis. Similique nostrum quo porro deleniti consequuntur ad.</p>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet numquam laborum quis sapiente. Architecto voluptatibus eum nam excepturi voluptate non, dolorem minima sit ratione fugit, eius blanditiis maiores corrupti totam dolores aliquam facere reprehenderit!</p>
                                <p>Some of the things we can provide a the site are:</p>
                                <ul>
                                    <li>On-page SEO</li>
                                    <li>Image Slider</li>
                                    <li>Contact Form /RSS Feed Integration</li>
                                    <li>Photo Gallery /Video Integration</li>
                                    <li>Great Site Security. ( We seriously recommend the anti-hacking package)</li>
                                    <li>E-Commerce</li>
                                    <li>Customer relations</li>
                                    <li>Much, Much, More</li>
                                </ul>
                            </div>

                            <div className="reviews-details-text">
                                <h6>Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem in cumque voluptatem qui recusandae!</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit debitis quos soluta autem saepe quaerat quo perferendis. Similique nostrum quo porro deleniti consequuntur ad.</p>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet numquam laborum quis sapiente. Architecto voluptatibus eum nam excepturi voluptate non, dolorem minima sit ratione fugit, eius blanditiis maiores corrupti totam dolores aliquam facere reprehenderit!</p>
                                <p>Some of the things we can provide a the site are:</p>
                                <ul>
                                    <li>On-page SEO</li>
                                    <li>Image Slider</li>
                                    <li>Contact Form /RSS Feed Integration</li>
                                    <li>Photo Gallery /Video Integration</li>
                                    <li>Great Site Security. ( We seriously recommend the anti-hacking package)</li>
                                    <li>E-Commerce</li>
                                    <li>Customer relations</li>
                                    <li>Much,Much, More</li>
                                </ul>
                            </div>

                            <div className="faqs-details-text">
                                <h6>Faqs Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem in cumque voluptatem qui recusandae!</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odit debitis quos soluta autem saepe quaerat quo perferendis. Similique nostrum quo porro deleniti consequuntur ad.</p>
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet numquam laborum quis sapiente. Architecto voluptatibus eum nam excepturi voluptate non, dolorem minima sit ratione fugit, eius blanditiis maiores corrupti totam dolores aliquam facere reprehenderit!</p>
                                <p>Some of the things we can provide a the site are:</p>
                                <ul>
                                    <li>On-page SEO</li>
                                    <li>Image Slider</li>
                                    <li>Contact Form /RSS Feed Integration</li>
                                    <li>Photo Gallery /Video Integration</li>
                                    <li>Great Site Security. ( We seriously recommend the anti-hacking package)</li>
                                    <li>E-Commerce</li>
                                    <li>Customer relations</li>
                                    <li>Much,Much, More</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onDescriptionClick = () => {
        let descriptionButton = document.querySelector('.description-menu-button');
        let reviewsButton = document.querySelector('.reviews-menu-button');
        let faqsButton = document.querySelector('.faqs-menu-button');

        let descriptionText = document.querySelector('.description-details-text');
        let reviewsText = document.querySelector('.reviews-details-text');
        let faqsText = document.querySelector('.faqs-details-text');


        descriptionButton.style.borderBottom = '4px solid #1941DF';
        reviewsButton.style.borderBottom = 'none';
        faqsButton.style.borderBottom = 'none';

        descriptionText.style.display = 'block';
        reviewsText.style.display = 'none';
        faqsText.style.display = 'none';
    }

    onReviewsClick = () => {
        let descriptionButton = document.querySelector('.description-menu-button');
        let reviewsButton = document.querySelector('.reviews-menu-button');
        let faqsButton = document.querySelector('.faqs-menu-button');

        let descriptionText = document.querySelector('.description-details-text');
        let reviewsText = document.querySelector('.reviews-details-text');
        let faqsText = document.querySelector('.faqs-details-text');


        descriptionButton.style.borderBottom = 'none';
        reviewsButton.style.borderBottom = '4px solid #1941DF';
        faqsButton.style.borderBottom = 'none';

        descriptionText.style.display = 'none';
        reviewsText.style.display = 'block';
        faqsText.style.display = 'none';
    }

    onFaqsClick = () => {
        let descriptionButton = document.querySelector('.description-menu-button');
        let reviewsButton = document.querySelector('.reviews-menu-button');
        let faqsButton = document.querySelector('.faqs-menu-button');

        let descriptionText = document.querySelector('.description-details-text');
        let reviewsText = document.querySelector('.reviews-details-text');
        let faqsText = document.querySelector('.faqs-details-text');


        descriptionButton.style.borderBottom = 'none';
        reviewsButton.style.borderBottom = 'none';
        faqsButton.style.borderBottom = '4px solid #1941DF';

        descriptionText.style.display = 'none';
        reviewsText.style.display = 'none';
        faqsText.style.display = 'block';
    }

}
