import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Card.css';

class Card extends Component {
    state = {}
    handleBook = () => {
        alert("Your Order is Placed");
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
                    <Link to="/payment">
                        <button className="btn btn-danger"> {button}</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Card;

