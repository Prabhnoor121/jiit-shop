import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card1'

function home() {
    return (
        <div className="home">
            <br />
            <br />
            <Banner />
            <br />
            <br />

            <div className="home__section">
                <Card
                    className="card_home"
                    src="images/1.png"
                    title="Second Hand Laptops"

                    description="Don't spend a lot of money when you can get it in half"
                />
                <Card
                    className="card_home"
                    src="images/2.jpg"
                    title="Books"
                    description="Get books of all the subjects you want for your exams"
                />
                <Card
                    className="card_home"
                    src="images/4.jpg"
                    title="Coding Material"
                    description="Get all the books you need to master coding"
                />
            </div>
            <div className="home__section">
                <Card
                    className="card_home"
                    src="images/5.jpg"
                    title="Boat Headphones"
                    description="Boat headphones for sale after just 3 months of use and are in good shape"
                    price="₹899"
                />
                <Card
                    className="card_home"
                    src="images/6.jpg"
                    title="Object Oriented Programming in C++"
                    description="7th edition and in super good shape"
                    price="₹299"
                />
                <Card
                    className="card_home"
                    src="images/9.jpeg"
                    title="Adidas Cricket Bat"
                    description="In great shape, just 6 months of use"
                    price="₹1999"
                />
            </div>
        </div>
    )
}

export default home
