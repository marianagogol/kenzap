import React, { Component } from 'react';
import './Package.scss';
import { connect } from 'react-redux';
import {changeSelected} from '../../actions/packagesAction';
import { changeTotal } from '../../actions/totalAction';
import * as _ from 'lodash';

class Package extends Component {

    constructor(props) {
        super(props)
    
        this.selectRef = React.createRef();
        this.packageRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.packages[this.props.index].selected === true) {
            this.selectRef.current.style.backgroundColor = '#1941DF';
            this.packageRef.current.style.border = '3px solid #1941DF';
        }
    }

    componentDidUpdate() {
        if (this.props.packages[this.props.index].selected === true) {
            this.selectRef.current.style.backgroundColor = '#1941DF';
            this.packageRef.current.style.border = '3px solid #1941DF';
        } else {
            this.selectRef.current.style.backgroundColor = '#E4E4E4';
            this.packageRef.current.style.border = 'none';
        }
    }

    render() {
        return (
            <div className="package" ref={this.packageRef}>
                <div className="package-title">
                    <div className="price">${this.props.packages[this.props.index].price}</div>
                    <div className="select" ref={this.selectRef} onClick={this.onClickTick}>
                         <img src={process.env.PUBLIC_URL + "/images/TickIconWhite.svg"} alt=""/>
                    </div>
                </div>
                <div className="name-package">{this.props.packages[this.props.index].packageName}</div>
                <div className="package-specification">
                    <div className="package-specification-icon">
                        <img src={process.env.PUBLIC_URL + "/images/TickIcon.svg"} alt=""/>
                    </div>
                    <div className="package-specification-text"> 
                        {this.props.packages[this.props.index].skills}
                    </div>
                </div>
            </div>
        )
    }

    onClickTick = () => {
        let newPackages = _.cloneDeep(this.props.packages);
    
        for (var i = 0; i < this.props.packages.length; i++) {
            if (i == this.props.index) {
                newPackages[i].selected = true;
            } else {
                newPackages[i].selected = false;
            }
        }

        this.props.changeSelectedStatus(newPackages);

        this.props.changeSummary(this.getSummary(newPackages));

    }

    getSummary = (newPackages) => {
        // get quantity
        const qt = parseInt(this.props.quantity);

        let pr;

        for (var i = 0; i < newPackages.length; i++){
            if (newPackages[i].selected === true) {
                pr = parseInt(newPackages[i].price);
            }
        }

        let total = pr*qt;
        return total;
        
    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        packages: store.packages,
        quantity: store.quantity.qt
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeSelectedStatus: (newPackages) => {
            dispatch(changeSelected(newPackages))},
        changeSummary: (total) => {
            dispatch(changeTotal(total))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Package);