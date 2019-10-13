import React from "react";
import { FaChevronRight } from "react-icons/fa"
class Subscribe extends React.Component {
    render() {
        return (
            <div className="subscribe-wrapper">
                <div className="container">

                    <div className="info">
                        <h2 className="slab">Sign up for our newsletter</h2>
                        <p className="sans">Want herbal info? Sign up today to discover the natural herbal cures and remedies to treat illness and disease</p>
                    </div>
                    <div className="form">
                        <input placeholder="Enter your email" />
                        <button><FaChevronRight /></button>

                    </div>
                </div>
            </div>
        )
    }

}

export default Subscribe