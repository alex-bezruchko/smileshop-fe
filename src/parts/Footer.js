import React from "react";
import logo from "./../img/herb-house.png"
import map from "./../img/map-marker.png";
import mail from "./../img/mail.png";
import phone from "./../img/phone.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-header">
                <img src={logo} alt="logo" />
                <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.</p>
            </div>
            <div className="footer-content">
                <div className="column">
                    <h2>Links</h2>
                    <ul>
                        <li>How to be a Farmer</li>
                        <li>4 Steps to Rule Your Farm</li>
                        <li>15 Tips for Young Farmers</li>
                        <li>20 Farm Care Ideas</li>
                    </ul>
                </div>
                <div className="column">
                    <h2>Cooperation</h2>
                    <ul>
                        <li>About Us</li>
                        <li>We Hire</li>
                        <li>Farm News</li>
                        <li>Become a Partner</li>

                    </ul>
                </div>
                <div className="column contact">
                    <h2>Info</h2>
                    <ul>
                        <li><img src={map} alt="map" />Farmer Street 101, NY 10036</li>
                        <li><img src={mail} alt="mail" />example@green-farm.com</li>
                        <li><img src={phone} alt="phone" />Call us: 1 (800)-123-1234</li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer