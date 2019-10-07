import React from "react";
import searchLogo from "./../img/search.png";
import { FaSearch } from "react-icons/fa"

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    componentDidMount() {

    }
    searchChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div className="search-wrapper">
                <input onChange={this.searchChange} name="search" value={this.state.search} placeholder="Search Products" />
                <button>
                    <FaSearch />
                </button>
            </div>
        )
    }
}

export default SearchForm;