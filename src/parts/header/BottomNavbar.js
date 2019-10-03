import React from "react";
import houseLogo from "./../../../src/img/herb-house.png";
import searchLogo from "./../../../src/img/search.png";
import cartLogo from "./../../../src/img/cart.png";

import $ from "jquery";
class TopNavbar extends React.Component {

    componentDidMount() {
        var open = false;
        $('#bottom-navbar-toggle').click(function () {
            $('#bottom-navbar').slideToggle("fast")
        })
        $('.bottom-navbar-menu-toggle').click(function () {
            if (open === false) {
                document.getElementsByClassName('toggle-span')[1].style.display = 'none';
                document.getElementsByClassName('toggle-span')[0].style.transform = "rotate(-133.33deg)"
                document.getElementsByClassName('toggle-span')[0].style.width = "35px"
                document.getElementsByClassName('toggle-span')[0].style.marginLeft = "3px"
                document.getElementsByClassName('toggle-span')[0].style.marginTop = "0px"

                document.getElementsByClassName('toggle-span')[2].style.transform = "rotate(133.33deg)"
                document.getElementsByClassName('toggle-span')[2].style.width = "35px"
                document.getElementsByClassName('toggle-span')[2].style.marginLeft = "3px"
                document.getElementsByClassName('toggle-span')[2].style.marginTop = "-20px"
                document.getElementsByClassName('bottom-navbar-menu')[0].style.display = "flex";
                document.getElementsByClassName('bottom-navbar-menu-toggle')[0].style.paddingLeft = "0px"
                document.getElementsByClassName('bottom-navbar-menu-toggle')[0].style.paddingRight = "0px"
                open = true
            } else {
                document.getElementsByClassName('toggle-span')[1].style.display = 'flex';

                document.getElementsByClassName('toggle-span')[0].style.transform = "none"
                document.getElementsByClassName('toggle-span')[0].style.width = "40px"
                document.getElementsByClassName('toggle-span')[0].style.marginLeft = "0px"
                document.getElementsByClassName('toggle-span')[0].style.marginTop = "0px"


                document.getElementsByClassName('toggle-span')[2].style.transform = "none"
                document.getElementsByClassName('toggle-span')[2].style.width = "40px"
                document.getElementsByClassName('toggle-span')[2].style.marginLeft = "0px"
                document.getElementsByClassName('toggle-span')[2].style.marginTop = "0px"

                document.getElementsByClassName('bottom-navbar-menu')[0].style.display = "none";

                document.getElementsByClassName('bottom-navbar-menu-toggle')[0].style.paddingLeft = "0px"
                document.getElementsByClassName('bottom-navbar-menu-toggle')[0].style.paddingRight = "0px"
                open = false

            }

        })

    }


    render() {
        return (
            <>
                <div className="bottom-navbar">
                    <img src={houseLogo} alt="herb house" />
                    <div className="bottom-navbar-actions">
                        <div className="bottom-navbar-menu-toggle">
                            <div className="toggle-span"></div>
                            <div className="toggle-span"></div>
                            <div className="toggle-span"></div>
                        </div>
                        <div><img src={searchLogo} alt="search icon" /></div>
                        <div><img src={cartLogo} alt="cart icon" /></div>
                    </div>

                    <div className="bottom-navbar-menu">
                        <ul>
                            <li>Home</li>
                            <li>Our Shop</li>
                            <li>Products</li>
                            <li>Recipes</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

}
export default TopNavbar