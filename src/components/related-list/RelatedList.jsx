import React, { Component } from 'react';
import './RelatedList.scss'
import RelatedItem from '../related-item/RelatedItem';
import { connect } from 'react-redux';
import { Fragment } from 'react';

class RelatedList extends Component {
    render() {
        return (
            <div className="related">
                <div className="related-title">
                    <div className="related-title-text">You may also like</div>
                    <div className="row">
                        {this.props.related.map((p, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-xl-4">
                                        <RelatedItem index={index} />
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        related: store.related
    })
}

export default connect(mapStateToProps)(RelatedList)
