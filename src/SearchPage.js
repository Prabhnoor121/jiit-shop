import axios from 'axios'
import React, { Component } from 'react';
import Header from './Header';
import './SearchPage.css'
import './Search.css'
import SearchResult from './SearchResult'
import Search from './Search';
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"
import PeopleIcon from '@material-ui/icons/People';
//import axios from 'axios'
import _ from 'lodash'

class SearchPage extends Component {
    state = {
        query: "",
        place: [],
        reviews: [],
        sortColumn: { path: "", order: "asc" },
        showSearch: "",
        click: false,
        startDate: "",
        endDate: ""
    }

    async componentDidMount() {
        const { data: place } = await axios.get("http://localhost:4000/app/search")
        const { data: reviews } = await axios.get("http://localhost:4000/app/review")
        this.setState({ place, reviews })
        console.log(this.state.place)
    }



    setShowSearch = (showSearch) => {
        this.setState({
            showSearch
        })
    }
    setStartDate = (startDate) => {
        this.setState({
            startDate
        })
    }
    setEndDate = (endDate) => {
        this.setState({
            endDate
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //window.location = "/search"
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    renderSortIcon = (path) => {
        //if (path !== this.state.sortColumn.path) return null;
        if (this.state.sortColumn.order === "asc")
            return <i className="fa fa-sort-asc"></i>;
        else return <i className="fa fa-sort-desc"></i>;
    };

    raisedSort = (path) => {
        const sortColumn = { ...this.state.sortColumn };
        // if (sortColumn.path === path) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        // } else {
        sortColumn.path = path;
        //sortColumn.order = "asc";
        // }
        this.setState({ sortColumn });
    };

    totalRating = (id) => {
        var n = 0,
            rating = 0;

        for (var review of this.state.reviews) {
            if (review.placeId === id) {
                n = n + 1;
                rating = rating + review.rating;
            }
        }
        var rate = rating / n;
        var rounded = Math.round(rate * 10) / 10;
        if (isNaN(rate)) {
            return 0;
        }
        return rounded;
    };
    handleClick = () => {
        let click = { ...this.state.click };
        click = click === true ? false : true;
        this.setState({
            click
        })
    }
    handleSelect = (ranges) => {
        this.setStartDate(ranges.selection.startDate);
        this.setEndDate(ranges.selection.endDate);
    }


    render() {

        //const { startDate, endDate } = this.props;
        const { query, place, sortColumn, showSearch, click, startDate, endDate } = this.state;
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
        };
        let filtered = place
        if (query) {
            filtered = place.filter((m) =>
                m.location.toLowerCase().startsWith(query.toLowerCase())
            );
        }
        console.log(filtered);
        let sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        console.log(sorted)
        return (
            <div className="searchPage">
                {/* <button onClick={this.handleClick}>Search Date</button> */}
                {
                    // click && (
                    //     <div className="search">
                    //         <DateRangePicker ranges={[selectionRange]} onChange={this.handleSelect} />
                    //         <h2>
                    //             Number of Guests
                    //                 <PeopleIcon />
                    //         </h2>
                    //         <input min={0}
                    //             defaultValue={2}
                    //             type="number" />
                    //         {/* <Button
                    //             onClick={() => history.push
                    //                 ('/search')}>
                    //             Search
                    //             </Button> */}
                    //     </div>
                    // )
                }
                {/* <div className="banner__search">
                    {showSearch && <Search />}
                    <button onClick={() =>
                        this.setShowSearch(!showSearch)}
                        className="banner__searchbutton" variant="outlined">
                        {showSearch ? "Hide" :
                            "Search Dates"}
                    </button>
                </div> */}
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="header__center">
                        <input type="text"
                            name="query"
                            placeholder="Search"
                            value={this.state.query}
                            onChange={this.handleSearch}
                        />
                        <input type='submit' className="'btn btn-danger btn block" value="search" />

                    </div>
                </form>

                <div className="searchPage__info">
                    {/* <p>
                        62 stays . 26 august to 30 august . 2
                        guest
                </p> */}
                    <h1>Stays nearby</h1>
                    <button variant="outlined"
                        className="clickable"
                        onClick={() => this.raisedSort("location")}
                    >
                        location {this.renderSortIcon("location")}
                    </button>
                    {/* <button variant="outlined">
                        Type of Place
                </button> */}
                    <button variant="outlined"
                        className="clickable"
                        onClick={() => this.raisedSort("price")}
                    >
                        price {this.renderSortIcon("price")}
                    </button>
                    {/* <button variant="outlined">
                        Rooms and Beds
                </button>
                    <button variant="outlined">
                        More Filters
                </button> */}
                </div>
                {sorted.map((option) => (
                    <SearchResult
                        key={option._id} location={option.location} id={option._id} title={option.title} description={option.details} price={option.price} img="images/20.jpg" star={this.totalRating(option._id)} total="$117 total"
                    />
                ))}
                {/* <SearchResult
                    img="images/20.jpg"
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed . 1.5 shared
            bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
                    star={4.73}
                    price="$30 / night"
                    total="$117 total"
                />
                <SearchResult
                    img="images/20.jpg"
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed . 1.5 shared
                bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
                    star={4.75}
                    price="$30 / night"
                    total="$117 total"
                /> */}
            </div>
        );
    }
}

export default SearchPage;
