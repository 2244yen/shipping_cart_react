import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import apiShop from '../../services/shop';
import '../../assets/css/cart.css';
import { getDBCart, removeToLocalStorage, clearAll }  from '../../utils/getData';

class Order extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            cart: [],
            isOrdered: false
        };
        this.removeItemInCart = this.removeItemInCart.bind(this);
    }
    
    removeItemInCart (key) {
        var newCart = this.state.cart.filter(item => item.key !== key);
        this.setState({
            cart: newCart
        });
        removeToLocalStorage(key);
    }

    handleOrder (e) {
        e.preventDefault();
        if (this.state.cart.length > 0) {
            this.setState({ cart: [], isOrdered: true });
            clearAll();
        } else {
            this.props.history.push("/");
        }
        
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
        let result = null;
        result = this.state.cart.map(item => {
            return <CartItem key={item.key} item={item} removeItemInCart={this.removeItemInCart}/>
        });
        return (
            <div className="container">
                {
                    this.state.isOrdered  ?
                        <h3>Thanks for your ordering! See your later!</h3> :
                        <div className="row">
                            <div className="col-md-8 shopping-list">
                                { result }
                            </div>
                            <div className="col-md-4 cart">
                                <Cart cart={this.state.cart}>
                                    {/* giong slot */}
                                    <button className="btn btn-info" onClick={ e => this.handleOrder(e) } >Place Order</button>
                                </Cart>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Order;