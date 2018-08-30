import React from 'react';

function Shipping (props) {
    return (
        <div>
            <form>
                <div>
                    <label>
                        {
                            props.shipping === 0 ? <input type="radio" name="shipping" disabled checked /> : <input type="radio" name="shipping" disabled />
                        }
                        <span className="delivery-color">8-10 business days</span> <br />
                        <small>$0 - Free Shipping</small>
                    </label>
                </div>
                <div>
                    <label>
                        {
                            props.shipping === 3.99 ? <input type="radio" name="shipping" disabled checked /> : <input type="radio" name="shipping" disabled />
                        }
                        <span className="delivery-color">5-7 business days</span> <br />
                        <small>$3.99 - Regular Shipping</small>
                    </label>
                </div>
                <div>
                    <label>
                        {
                            props.shipping === 7.99 ? <input type="radio" name="shipping" disabled checked /> : <input type="radio" name="shipping" disabled />
                        }
                        <span className="delivery-color">2-4 business days</span> <br />
                        <small>$7.99 - Standard Shipping</small>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Shipping;