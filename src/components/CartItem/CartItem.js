import React, { Component } from 'react';
import Shipping from '../Shipping/Shipping';

class CartItem extends Component {

    removeItemInCart (e, key) {
        e.preventDefault();
        this.props.removeItemInCart(key);
    }

    render () {
        const item = this.props.item;
        // console.log(item);
        return (
            <div className="row item">
                <h4 className="item-header">{ item.name }</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p className="red-title">${ item.price }</p>
                        <p className="item-metadata"><small>sold by: { item.seller }</small></p>
                        <div>
                            <button className="btn btn-info" onClick={ (e) => this.removeItemInCart(e, item.key) }>Remove</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4><strong>Shipping options</strong></h4>
                        <Shipping shipping={ item.shipping }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;