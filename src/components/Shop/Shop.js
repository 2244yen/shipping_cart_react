import React, { Component } from 'react';
import ShopList from '../ShopList/ShopList';
import Cart from '../Cart/Cart';
import apiShop from '../../services/shop';
import { getDBCart, addToLocalStorage }  from '../../utils/getData';

class Shop extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            cart: [],
            cartCount: {}
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart (key) {
        var item = this.state.items.find(itm => itm.key === key);
        var newCart = [...this.state.cart];
        // newCart.push(item);
        var itemInCart = newCart.find(itm => itm.key === key);
        if (itemInCart) {
            itemInCart.qty = parseInt(itemInCart.qty) + 1 || 1;
        } else {
            newCart.push(item);
        }
        // var newCartCount = Object.assign({}, this.state.cartCount);
        // var newCount = (newCartCount[key] || 0) + 1;
        // newCartCount[key] = newCount;

        this.setState({
            cart: newCart
            // cartCount: newCartCount
        });

        addToLocalStorage(key);
    }

    componentDidMount () {
        apiShop.fetchData().then(response => {
            if (response) {
                this.setState({ items: response });
                var cartData = getDBCart();
                var cartKey = Object.keys(cartData);
                var items = cartKey.map(key => {
                    var item = this.state.items.find(data => data.key === key);   
                    item.qty = parseInt(cartData[key]);
                    return item;
                })
                this.setState({ cart: items});
            }
        });
        
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 shopping-list">
                        <ShopList items={this.state.items} addToCart={this.addToCart}/>
                    </div>
                    <div className="col-md-4 cart">
                        <Cart cart={this.state.cart}>
                            {/* giong slot */}
                            <a className="btn btn-info" href="/order">Review your order</a>
                        </Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;