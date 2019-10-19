import React from "react";
import leafLogo from "./../../../src/img/leaf.png";
import soupLogo from "./../../../src/img/soup.png";
import truckLogo from "./../../../src/img/truck.png";
import $ from "jquery";
class TopNavbar extends React.Component {

    componentDidMount() {
        var open = false;
        $('#top-navbar-toggle').click(function () {
            $('#top-navbar').slideToggle("fast")
        })
        $('.top-navbar-menu-toggle').click(function () {
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
                document.getElementsByClassName('top-navbar-menu')[0].style.display = "flex";
                document.getElementsByClassName('top-navbar-menu-toggle')[0].style.paddingLeft = "0px"
                document.getElementsByClassName('top-navbar-menu-toggle')[0].style.paddingRight = "0px"
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

                document.getElementsByClassName('top-navbar-menu')[0].style.display = "none";

                document.getElementsByClassName('top-navbar-menu-toggle')[0].style.paddingLeft = "0px"
                document.getElementsByClassName('top-navbar-menu-toggle')[0].style.paddingRight = "0px"
                open = false

            }

        })

    }


    render() {
        return (
            <>
                <div id="top-navbar">
                    <div className="top-navbar-menu-toggle">
                        <div className="toggle-span"></div>
                        <div className="toggle-span"></div>
                        <div className="toggle-span"></div>
                    </div>
                    <div className="top-navbar-menu">
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Your Account</a></li>
                            <li><a href="/">Your Basket</a></li>
                        </ul>
                    </div>
                    <div className="company-offers">
                        <a href="/"><img src={soupLogo} alt="soup" /> Try our meal boxes</a>
                        <a href="/"><img src={leafLogo} alt="leaf" /> 100% organic</a>
                        <a href="/"><img src={truckLogo} alt="truck" /> Free delivery</a>
                    </div>
                </div>
                <div id="top-navbar-toggle">^</div>

            </>
        )
    }

}
export default TopNavbar