import React from "react";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    render() {
        return (
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h1>Cart</h1>
                    <p>Home / Cart</p>
                    {/* <Path /> */}
                </div>

                <div className="cart-content">
                    {this.state.cart && this.state.cart.length > 0 ?
                        <>Cart Content</>
                        : <p>Your cart is currently empty.</p>
                    }
                </div>

            </div>
        )
    }
}

export default Cart;