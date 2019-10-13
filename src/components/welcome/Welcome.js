import React from "react";
import Slider from "./Slider"
import Categories from "./Categories"
import Subscribe from "./../../parts/Subscribe"


const Welcome = () => {


    return (
        <div className="welcome-wrapper">

            <Slider />
            <Categories />
            <Subscribe />
        </div >

    )
}

export default Welcome