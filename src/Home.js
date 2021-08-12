import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card1'

function home() {
    return (
        <div className="home">
            <Banner />
            <br />
            <br />

            <div className="home__section">
                <Card
                    className="card_home"
                    src="images/13.jpg"
                    title="Unique Stays"

                    description="Spaces that are not just a place to sleep"
                />
                <Card
                    className="card_home"
                    src="images/14.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together
                    , led by a world of hosts"
                />
                <Card
                    className="card_home"
                    src="images/16.jpg"
                    title="Entire Homes"
                    description="Comfortable private places, with room for 
                    friends and family"
                />
            </div>
            <div className="home__section">
                <Card
                    className="card_home"
                    src="images/17.jpg"
                    title="Bedroom Apartment"
                    description="Superhost with great amenities
                and a fabolous shopping complex nearby"
                    price="₹70/night"
                />
                <Card
                    className="card_home"
                    src="images/18.jpg"
                    title="Penthous in London"
                    description="Enjoy the amazing sights of London with this stunning
                penthouse"
                    price="₹60/night"
                />
                <Card
                    className="card_home"
                    src="images/19.jpg"
                    title="Bedroom Apartment"
                    description="Superhost with a stunning view of the beachside
                in Sunny Bournemouth"
                    price="₹90/night"
                />
            </div>
        </div>
    )
}

export default home
