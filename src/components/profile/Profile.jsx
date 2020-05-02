import React, { Component } from 'react';
import './Profile.scss';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import {changeRating} from '../../actions/ratingAction'

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="operator">
                    <div className="photo">
                        <img src="/images/PhotoProfile.svg" alt="" />
                    </div>
                    <div>
                        <div className="operator-name">
                            Amber West
                        </div>
                        <div className="operator-content">
                            <div className="operator-content-flag">
                                <img src="/images/Flag.svg" alt="" />
                            </div>
                            <div className="operator-content-stars">
                                <ReactStars
                                    count={5}
                                    size={15}
                                    value={this.props.myRating}
                                    onChange={this.ratingChanged}
                                    color1={'#CDCDCD'}
                                    color2={'#F5DA02'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat">
                    <i className="fas fa-comment"></i>
                    <span>Chat</span>
                </div>
            </div>
        )
    }

    ratingChanged = (newRating) => {
        this.props.changeMyRating(newRating)
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        myRating: store.rating.rating
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeMyRating: (newRating) => {
            dispatch(changeRating(newRating))
            
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
