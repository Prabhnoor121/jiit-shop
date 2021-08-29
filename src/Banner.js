import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            {/* <div className="banner__search">
                {showSearch && <Search />}
                <button onClick={() =>
                    setShowSearch(!showSearch)}
                    className="banner__searchbutton" variant="outlined">
                    {showSearch ? "Hide" :
                        "Search Dates"}
                </button>
            </div> */}
            <div className="banner__info">
                <h1>Get out and look for better options</h1>
                <h5>
                    Plan a different approach and uncover the hidden gems near you.
                </h5>
                <button
                    onClick={() => history.push('/search')}
                    variant='outlined'> Explore Nearby</button>
            </div>

        </div>
    )
}

export default Banner
