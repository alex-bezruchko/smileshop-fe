import React from "react";
import { FaFacebook, FaGooglePlus, FaTwitter, FaSkype, FaArrowUp } from "react-icons/fa"
import $ from "jquery";

// $("#scrolltop").click(function () {
//     console.log('clicked')
// })

class Copyright extends React.Component {

    componentDidMount() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $("#scrolltop").fadeIn()
            } else {
                $("#scrolltop").fadeOut()
            }
        })
        $("#scrolltop").click(function () {
            console.log('haha')
            $('html, body').animate({ scrollTop: 0 }, 100)
        })
    }
    render() {
        return (

            <footer>
                <div className="footer-copyright">
                    <ul className="footer-socials">
                        <li><FaFacebook /></li>
                        <li><FaGooglePlus /></li>
                        <li><FaTwitter /></li>
                        <li><FaSkype /></li>
                    </ul>
                    <p>herbwebsite @ 2019 / All Rights Reserved</p>
                </div>
                <div id="scrolltop">
                    <FaArrowUp />
                </div>

            </footer>
        )
    }

}

export default Copyright