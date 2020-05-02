import React, { Component } from 'react';
import './RelatedItem.scss';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import {changeRating} from '../../actions/relatedAction'

class RelatedItem extends Component {
    render() {
        return (
            <div className="related-item card">
                <img src={process.env.PUBLIC_URL + this.props.related[this.props.index].photo} className="related-item-image card-img-top" alt="..." />
                <div className="related-item-body card-body">
                    <div className="related-item-title">{this.props.related[this.props.index].title}</div>
                    <div className="related-item-user">{this.props.related[this.props.index].user}</div>
                    <div className="related-item-footer">
                        <div className="related-item-footer-price">${this.props.related[this.props.index].price}</div>
                        <div className="related-item-footer-rating">
                            <ReactStars
                                count={5}
                                size={15}
                                value={this.props.related[this.props.index].rating}
                                onChange={this.ratingChanged}
                                color1={'#CDCDCD'}
                                color2={'#F5DA02'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ratingChanged = (newRating) => {
        console.log(newRating, this.props.index);
        this.props.relatedRatingChanged(newRating, this.props.index)
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        related: store.related
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        relatedRatingChanged: (newRating, index) => {
            dispatch(changeRating(newRating, index))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedItem)