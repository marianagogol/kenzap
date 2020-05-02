import React, { Component } from 'react';
import PresentationImages from '../presentation-images/PresentationImages';
import './Presentation.scss';
import Profile from '../profile/Profile';
import PackageList from '../package-list/PackageList';
import Quantity from '../quantity/Quantity';
import { connect } from 'react-redux';
import {changeSelectedWishlist} from '../../actions/wishlistAction'
import { Link } from 'react-router-dom';

class Presentation extends Component {
    render() {
        return (
            <div className="presentation">
                <div className="presentation-body" >
                    <div className="row no-gutters">
                        <div className="col-xs-12 col-xl-8">
                            <div className="presentation-images">
                                <div className="breadcrumb-holder">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><a href="#">Market</a></li>
                                            <li className="breadcrumb-item"><a href="#">Wordpress</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">I will design and build a professional website</li>
                                        </ol>
                                    </nav>
                                </div>
                                <PresentationImages />
                            </div>
                        </div>
                        <div className="col-xs-12 col-xl-4 ">
                            <div className="presentation-cards">
                                <div className="presentation-cards-header">I will customize your wordpress theme</div>
                                <div className="presentation-cards-profile">
                                    <Profile />
                                    <PackageList />
                                    <Quantity />
                                    <div className="button-continue">
                                        <div className="button-continue-body">
                                            <div className="button-continue-text">Continue</div>
                                            <div className="button-continue-summary">(${this.props.total})</div>
                                        </div>
                                    </div>
                                    <div className="add-to-wishlist">
                                        <div className="add-to-wishlist-body" onClick={this.onClickWishlist}>
                                            <i className="far fa-heart"></i>
                                            <div>Add to wishlist</div>
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

    onClickWishlist = () => {
        console.log(this.props.selected)
        let select = this.props.selected; // !this.props.selected
        
        if (select === false) {
            select = true;
            document.querySelector('.add-to-wishlist i').style.color = 'red';
        } else {
            select = false;
            document.querySelector('.add-to-wishlist i').style.color = '#323232';
        }

        this.props.changeWishlist(select);
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        total: store.total.total,
        selected: store.wishlist.selected
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeWishlist: (select) => {
            dispatch(changeSelectedWishlist(select))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation)