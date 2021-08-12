import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {}
    handleBook = () => {
        alert("Your Room is Booked");
        window.location = "/"
    }
    render() {
        const { src, title, description, price, location, button } = this.props;
        return (
            <div className="card">
                <img src={src} alt="" />
                <div className="card__info">
                    <h3>{location}</h3>
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                    <h3>{price}</h3>
                    {/* <button className="btn btn-danger" onClick={this.handleBook}> {button}</button> */}
                </div>
            </div>
        );
    }
}

export default Card;

