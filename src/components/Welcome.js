import React from "react";
import welcomeLogo from "./../img/welcome.png";
class Welcome extends React.Component {

    componentDidMount() {
        const welcomeDiv = document.getElementsByClassName('welcome-wrapper')[0];
        console.log(welcomeDiv)
        welcomeDiv.style.backgroundImage = `url(${welcomeLogo})`
    }
    render() {
        return (
            <div className="welcome-wrapper">
                <h1 className="anton">Our Products</h1>
                <h2 className="slab">Organic supplements grown with love and care</h2>
                {/* <img src={welcomeLogo} alt="welcome" className="welcome-img" /> */}


            </div>

        )
    }
}

export default Welcome