import React, { Component } from 'react';
import '../../assets/css/cart.css';

class Cart extends Component {
    constructor (props) {
        super(props);
        this.price = 0;
        this.shipping = 0;
        this.tax = 0;
        this.beforeTax = 0;
        this.totalPrice = 0;
    }

    calcData () {
        var price = this.props.cart.reduce((prev, item) => item.price * (item.qty || 1) + prev, 0);
        var shipping = this.props.cart.reduce((prev, item) => item.shipping * (item.qty || 1) + prev, 0)
        this.price = price;
        this.shipping = shipping;
        this.tax = (this.shipping + this.price) * 0.1;
        this.beforeTax = this.shipping + this.price;
        this.totalPrice = this.shipping + this.price + this.tax;
    }

    roundTwoDecimal (number) {
        return Math.round(number * 100) / 100;
    }

    render () {
        var cart = this.props.cart;
        // console.log('cart', cart);
        const itemsQty = cart.length || 0;
        this.calcData();
        return (
            <div>
                <div className="text-center">
                    <h4><strong>Order Review</strong></h4>
                    Item ordered: { itemsQty }
                </div>
                <ul>
                    <li>Items: ${ this.roundTwoDecimal(this.price) }</li>
                    <li>Shipping & Handling: ${ this.roundTwoDecimal(this.shipping) }</li>
                    <li>Total before tax: ${ this.roundTwoDecimal(this.beforeTax) }</li>
                    <li>Estimated Tax: ${ this.roundTwoDecimal(this.tax) }</li>
                    <h4 className="red-title">Order Total: ${ this.roundTwoDecimal(this.totalPrice) }</h4>
                    { this.props.children }
                </ul>
            </div>
        );
    }
}

export default Cart;