import React from "react";
import { Link } from "react-router-dom";
import bulk from "./../../img/categories/bulktea.jpg"
import spices from "./../../img/categories/spices.jpg"
import supplements from "./../../img/categories/supplements.jpg"
import tinctures from "./../../img/categories/tinctures.jpg"


const Categories = () => {

    return (
        <div className="category-wrapper">
            <div className="container">
                <div className="column">
                    <img src={bulk} alt="bulk" />
                    <h2 className="slab">bulk</h2>
                    <p className="sans">
                        Our bulk herbs and spices are carefully selected from the best producers and growers around the world. We look for the highest quality, freshness, and potency in our products, as well as organic purity and sustainability. »</p>
                </div>
                <div className="column">
                    <img src={spices} alt="spices" />
                    <h2 className="slab">spices</h2>
                    <p className="sans">
                        Our bulk herbs and spices are carefully selected from the best producers and growers around the world. We look for the highest quality, freshness, and potency in our products, as well as organic purity and sustainability. »</p>
                </div>
                <div className="column">
                    <img src={supplements} alt="supplements" />
                    <h2 className="slab">supplements</h2>
                    <p className="sans">
                        Our bulk herbs and spices are carefully selected from the best producers and growers around the world. We look for the highest quality, freshness, and potency in our products, as well as organic purity and sustainability. »</p>
                </div>
                <div className="column">
                    <img src={tinctures} alt="tinctures" />
                    <h2 className="slab">tinctures</h2>
                    <p className="sans">
                        Our bulk herbs and spices are carefully selected from the best producers and growers around the world. We look for the highest quality, freshness, and potency in our products, as well as organic purity and sustainability. »</p>
                </div>

            </div>


        </div>
    )
}

export default Categories;