import React, { Component } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult'
import Card from './Card'
import './Home.css'

class Wishlist extends Component {
    state = { place: [], reviews: [] }
    async componentDidMount() {
        const { data: place } = await axios.get("http://localhost:4000/app/search")
        const { data: reviews } = await axios.get("http://localhost:4000/app/review")
        this.setState({ place, reviews })

    }
    // totalRating = (id) => {
    //     var n = 0,
    //         rating = 0;

    //     for (var review of this.state.reviews) {
    //         if (review.placeId === id) {
    //             n = n + 1;
    //             rating = rating + review.rating;
    //         }
    //     }
    //     var rate = rating / n;
    //     var rounded = Math.round(rate * 10) / 10;
    //     if (isNaN(rate)) {
    //         return 0;
    //     }
    //     return rounded;
    // };
    render() {
        const { place } = this.state;
        let filtered = place.filter((m) =>
            m.liked === true);

        return (<div>
            <h1>Cart</h1>
            <div className="home__section">
                {filtered.map((option) => (

                    <Card
                        key={option._id}
                        className="card_home"
                        src="images/5.jpg"
                        title={option.title}
                        location={option.location}
                        description={option.details}
                        price={`₹${option.price}`}
                        button="Place Order"
                    />
                ))}</div>
        </div>
        );
    }
}

export default Wishlist;