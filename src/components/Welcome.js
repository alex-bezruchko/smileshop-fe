import React from "react";
import { FaRegFolder } from "react-icons/fa"
import axios from "axios";
import SearchForm from "./../parts/SearchForm";
class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        }
    }
    componentDidMount() {

        // Fetch All Categories
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

        // Fetch All Products

        axios
            .get('https://smileshop-be.herokuapp.com/api/products/')
            .then(res => {
                if (res) {
                    this.setState({
                        products: res.data.splice(0, 12)
                    })

                } else {
                    this.setState({
                        products: []
                    })
                }
            })
            .catch(err => {
                this.setState({
                    products: []
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
                                            return <li key={cat.id} className="crimson"><a href="/"><FaRegFolder />{cat.cat_name}</a></li>
                                        })}
                                    </>
                                    : <></>
                                }
                            </ul>
                        </aside>
                        <div className="products">

                            <h2 className="slab">Promoted Products</h2>

                            {this.state.products && this.state.products.length > 0 ?
                                <div className="promoted">
                                    {this.state.products.map(product => {
                                        return <div key={product.id} className="column">
                                            <img src={product.image} />
                                            <p className="crimson">{product.cat_name}</p>
                                            <h3 className="slab">{product.name}</h3>
                                            <p className="crimson price">${product.price.toString().slice(0, 2)}.{product.price.toString().slice(-2)}</p>
                                        </div>
                                    })}
                                </div>
                                : <></>}
                        </div>
                    </div>

                </div>
                {/* <img src={welcomeLogo} alt="welcome" className="welcome-img" /> */}

            </div >

        )
    }
}

export default Welcome