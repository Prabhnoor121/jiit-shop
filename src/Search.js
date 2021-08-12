import React, { useEffect, useState } from 'react'
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"
import { Button } from "@material-ui/core"
import PeopleIcon from '@material-ui/icons/People';
import './Search.css'
import { useHistory } from "react-router-dom";
import SearchPage from './SearchPage';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    // the below code is inbuilt
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    // same another inbuilt code below
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        console.log(startDate, endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]
            } onChange=
                {handleSelect} />
            <h2>
                Number of Guests
                    <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number" />
            <Button
                onClick={() => history.push
                    ('/search')}>
                Search
                </Button>
        </div>
    )
}

export default Search
