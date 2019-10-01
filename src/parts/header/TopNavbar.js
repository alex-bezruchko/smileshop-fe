import React from "react";
import $ from "jquery";
class TopNavbar extends React.Component {

    componentDidMount() {

        $('#top-navbar-toggle').click(function () {
            $('#top-navbar').slideToggle("fast", function () {

            })
        })

    }


    render() {
        return (
            <>
                <div id="top-navbar">
                    <div className="company-offers">
                        <a href="/">Try our meal boxes</a>
                        <a href="/">100% organic</a>
                        <a href="/">Free delivery</a>
                    </div>
                </div>
                <div id="top-navbar-toggle">^</div>
            </>
        )
    }

}
export default TopNavbar