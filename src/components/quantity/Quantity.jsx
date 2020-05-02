import React, { Component } from 'react';
import './Quantity.scss'
import { connect } from 'react-redux';
import { addQuantity, substractQuantity } from '../../actions/quantityAction';
import { bindActionCreator } from 'redux';
import { changeTotal } from '../../actions/totalAction';

class Quantity extends Component {
    render() {
        return (
            <div className="quantity">
                <div className="quantity-body">
                    <div className="quantity-text">QTY:</div>
                    <div className="quantity-form">
                        <div>{this.props.quantity}</div>
                    </div>
                    <div className="buttons">
                        <div className="button-minus" onClick={() => this.onMinusQuantityClick(this.props.quantity - 1)}><i className="fas fa-minus"></i></div>
                        <div className="button-plus" onClick={() => this.onPlusQuantityClick(this.props.quantity + 1)}><i className="fas fa-plus"></i></div>
                    </div>
                </div>
            </div>
        )
    }

    onPlusQuantityClick = (quantity) => {
        console.log("On plus quantity click");
        this.props.plusQuantity(quantity);

        let tot = this.getSummary(quantity);

        this.props.changeSummary(tot)
    }

    onMinusQuantityClick = (quantity) => {
        if (quantity > 0) {
            this.props.minusQuantity(quantity)
            this.props.changeSummary(this.getSummary(quantity))
        }

    }

    getSummary = (quantity) => {
        // get quantity
        const qt = parseInt(quantity);

        let pr;

        for (var i = 0; i < this.props.packages.length; i++) {
            if (this.props.packages[i].selected === true) {
                pr = parseInt(this.props.packages[i].price);
            }
        }

        let total = pr * qt;
        return total;

    }
}

const mapStateToProps = (store, ownProps) => {
    return ({
        ownProps,
        quantity: store.quantity.qt,
        packages: store.packages
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        plusQuantity: (quantity) => {
            console.log("Map Dispatch plusQuantity")
            let action = addQuantity(quantity);
            dispatch(action)
        },
        minusQuantity: (quantity) => {
            dispatch(substractQuantity(quantity))
        },
        changeSummary: (total) => {
            dispatch(changeTotal(total))
        }

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);

