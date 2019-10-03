import React from "react";
import houseLogo from "./../../../src/img/herb-house.png";
import searchLogo from "./../../../src/img/search.png";
import closeLogo from "./../../../src/img/close.png";
import cartLogo from "./../../../src/img/cart.png";
import arrowClosedLogo from "./../../../src/img/arrow-closed.png";


import $ from "jquery";
class TopNavbar extends React.Component {

    componentDidMount() {
        let open = false;
        let searchModal = false;
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

        $('.bottom-navbar-search-toggle').click(function () {
            if (searchModal === false) {
                $('.search-modal-wrapper').css("display", "flex")
                $('.search-modal-wrapper').fadeIn()
            } else {
                $('.search-modal-wrapper').css("display", "none")
                $('.search-modal-wrapper').fadeOut()
            }
        })
        $('.search-modal-close').click(function () {
            $('.search-modal-wrapper').css("display", "none")
            $('.search-modal-wrapper').fadeOut("slow")
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
                        <div className="bottom-navbar-search-toggle"><img src={searchLogo} alt="search icon" /></div>
                        <div><img src={cartLogo} alt="cart icon" /></div>
                    </div>
                    <div className="bottom-navbar-menu">
                        <ul>
                            <li>
                                <p>Home</p>
                                <div><img className="arrow" src={arrowClosedLogo} alt="arrow icon" /></div>
                            </li>
                            <li>
                                <p>Our Shop</p>
                                <div><img className="arrow" src={arrowClosedLogo} alt="arrow icon" /></div>
                            </li>
                            <li>
                                <p>Products</p>
                                <div><img className="arrow" src={arrowClosedLogo} alt="arrow icon" /></div>
                            </li>
                            <li>
                                <p>Recipes</p>
                                <div><img className="arrow" src={arrowClosedLogo} alt="arrow icon" /></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search-modal-wrapper">
                    <div className="search-modal-close"><img src={closeLogo} alt="close icon" /></div>
                    <div className="search-modal-body">
                        <input placeholder="ENTER KEYWORDS" />
                        <button><img src={searchLogo} alt="search icon" /></button>
                    </div>

                </div>
            </>
        )
    }

}
export default TopNavbar