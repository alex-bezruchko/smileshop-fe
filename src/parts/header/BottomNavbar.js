// import React from "react";
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { Link } from "react-router-dom";
import houseLogo from "./../../../src/img/herb-house.png";
import searchLogo from "./../../../src/img/search.png";
import closeLogo from "./../../../src/img/close.png";
import cartLogo from "./../../../src/img/cart.png";

import arrowClosedLogo from "./../../../src/img/arrow-closed.png";


import $ from "jquery";
class TopNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            isOpen: false
        }
    }
    // const toggle = () => setIsOpen(!isOpen);
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
    componentDidMount() {
        let open = false;
        let searchModal = false;

        // Bottom Menu Toggle
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

        // Bottom Menu Search Modal Toggle
        $('.bottom-navbar-search-toggle').click(function () {
            if (searchModal === false) {
                $('.search-modal-wrapper').css("display", "flex")
                $('.search-modal-wrapper').fadeIn()
            } else {
                $('.search-modal-wrapper').css("display", "none")
                $('.search-modal-wrapper').fadeOut()
            }
        })

        // Bottom Menu Search Modal Close
        $('.search-modal-close').click(function () {
            $('.search-modal-wrapper').css("display", "none")
            $('.search-modal-wrapper').fadeOut("slow")
        })


        $('.bottom-navbar-panel').hide();

    }

    // Select Tab


    render() {
        return (
            <>
                <div className="bottom-navbar-wrapper">
                    <div className="container">
                        <Link className="home-link" to={'/'}>
                            <img src={houseLogo} alt="herb house" />
                        </Link>

                        <div className="bottom-navbar">
                            <div className="bottom-navbar-actions">
                                <div className="bottom-navbar-menu-toggle">
                                    <div className="toggle-span"></div>
                                    <div className="toggle-span"></div>
                                    <div className="toggle-span"></div>
                                </div>
                                <div className="bottom-navbar-search-toggle"><img src={searchLogo} alt="search icon" /></div>
                                <div><Link to={'/cart'}><img src={cartLogo} alt="cart icon" /></Link></div>
                            </div>

                            <div className="bottom-navbar-menu">

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Home
                                            </DropdownToggle>
                                    <DropdownMenu up>
                                        <DropdownItem>
                                            <div>About Us</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>What we Offer</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>Upcoming Events</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>Latest News</div>
                                        </DropdownItem>

                                        <DropdownItem>
                                            <div>Contact</div>
                                        </DropdownItem>
                                    </DropdownMenu>


                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Products
                                            </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <div>Supplements</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>Herbs</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>Spices</div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div>Books</div>
                                        </DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </div>

                        </div>
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