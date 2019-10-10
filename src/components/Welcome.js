import React from "react";
import { FaRegFolder } from "react-icons/fa"
import axios from "axios";
import SearchForm from "./../parts/SearchForm";
class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {

        axios
            .get('https://smileshop-be.herokuapp.com/api/products/categories')
            .then(res => {
                if (res) {
                    this.setState({
                        categories: res.data
                    })
                } else {
                    this.setState({
                        categories: []
                    })
                }
            })
            .catch(err => {
                this.setState({
                    categories: []
                })
            })
    }
    render() {
        return (
            <div className="welcome-wrapper">
                <div className="header">
                    <h1 className="anton">Our Products</h1>
                    <h2 className="slab">Organic supplements grown with love and care</h2>
                </div>

                <div className="content-wrapper">
                    <div className="container">
                        <aside>
                            <SearchForm />
                            <ul>
                                <h3 className="slab">Products Categories</h3>
                                {this.state.categories && this.state.categories.length > 0 ?
                                    <>
                                        {this.state.categories.map(cat => {
                                            return <li key={cat.id} className="crimson"><a href="/"><FaRegFolder />{cat.name}</a></li>
                                        })}
                                    </>
                                    : <></>
                                }
                            </ul>
                        </aside>
                    </div>

                </div>
                {/* <img src={welcomeLogo} alt="welcome" className="welcome-img" /> */}

            </div>

        )
    }
}

export default Welcome