import React from "react";
import welcomeLogo from "./../img/welcome.png";
import SearchForm from "./../parts/SearchForm";
class Welcome extends React.Component {

    componentDidMount() {
        const welcomeDiv = document.getElementsByClassName('header')[0];
        console.log(welcomeDiv)
        // welcomeDiv.style.backgroundImage = `url(${welcomeLogo})`
    }
    render() {
        return (
            <div className="welcome-wrapper">
                <div className="header">
                    <h1 className="anton">Our Products</h1>
                    <h2 className="slab">Organic supplements grown with love and care</h2>
                </div>

                {/* <img src={welcomeLogo} alt="welcome" className="welcome-img" /> */}
                <SearchForm />

            </div>

        )
    }
}

export default Welcome