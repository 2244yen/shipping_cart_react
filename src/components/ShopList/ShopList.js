import React, { Component } from 'react';
import ShopItem from '../ShopItem/ShopItem';
import '../../assets/css/shop.css';

class ShopList extends Component {
    constructor (props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart (key) {
        this.props.addToCart(key);
    }

    renderList () {
        const list = this.props.items;
        // console.log('items', list);
        const result = list.map((item, key) => {
            return (
                <ShopItem key={key} item={item} addToCart={this.addToCart}></ShopItem>
            );
        })
        return result;
    }

    render () {
        return (
            <div className="shop-container">
                { this.renderList() }
            </div>
        );
    }
}

export default ShopList;