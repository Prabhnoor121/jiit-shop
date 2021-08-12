import React, { Component } from 'react'
import './SearchResult.css'
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Likes from './like'
import axios from 'axios';


class SearchResult extends Component {
    state = { titles: { id: "", liked: false } }
    handleLike = (title) => {
        const titles = { ...this.state.titles };
        // const index = titles.indexOf(title);
        // titles[index] = { ...titles[index] };
        titles.liked = !titles.liked;
        titles.id = title;
        this.setState({ titles });

        axios.put("http://localhost:4000/app/host" + "/" + title, titles)
            .then(response => console.log(response.data))

    };
    handleBook = () => {
        alert("Your Room is Booked");
        window.location = "/"
    }
    render() {
        const { img, location, id, title, description, star, price, total } = this.props
        return (
            <div className="searchResult">
                <img src={img} alt="" />
                {/* <FavoriteBorderIcon
                    className="searchResult__heart" /> */}

                <div className="searchResult__info">
                    <div className="searchResult__infoTop">
                        <h3>{location}</h3>
                        <Likes onClick={() => this.handleLike(id)} liked={this.state.titles.liked} className="searchResult__heart" />
                        <h3>{title}</h3>
                        <p>____</p>
                        <h4>{description}</h4>
                    </div>
                    <div className="searchResult__infoBottom">
                        <div className="searchResult__stars">
                            <StarIcon className="searchResult__star" />
                            <p>
                                <strong>{star}</strong>
                            </p>
                        </div>
                        <div className="searchResult__price">
                            <button
                                className="btn btn-danger" onClick={this.handleBook}
                            > Book Now</button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h2>₹{price}</h2>
                            {/* <p>{total}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResult
