import React, { Component } from 'react';
import './PackageList.scss';
import Package from '../package/Package'
import { connect } from 'react-redux';

class PackageList extends Component {
    render() {
        return (
            <div className="package-list">
                {this.props.packages.map((p, index) => {
                    return <Package key={index} index={index}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        packages: store.packages
    })
};

export default connect(mapStateToProps)(PackageList);