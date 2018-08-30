import React, { Component } from 'react';

class ShopItem extends Component {
    constructor (props) {
        super(props);
        // this.addToCart = this.addToCart.bind(this);
    }

    addToCart (e, key) {
        e.preventDefault();
        this.props.addToCart(key);
    }

    render () {
        const item = this.props.item;
        const features = item.features && item.features.length > 0 ? item.features : []
        return (
            <div className="row item">
                <div className="col-md-3">
                    <img src={ item.img } alt="" className="img-responsive"/>
                </div>
                <div className="col-md-9">
                    <h4 className="item-header">{ item.name }</h4>
                    <p className="item-metadata"><small>by: { item.seller }</small></p>
                    <div className="row">
                        <div className="col-md-6">
                            <p>${ item.price }</p>
                            <p>only { item.stock } left in stock - order soon</p>
                            <div>
                                <button className="btn btn-info" onClick={ (e) => this.addToCart(e, item.key) } >add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4><strong>Features</strong></h4>
                            <ul className="item-features-list">
                                {
                                    features.map((feature, index) => {
                                        return (
                                            <li key={ index }>{ feature.description }: <span><b>{ feature.value }</b></span></li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopItem;