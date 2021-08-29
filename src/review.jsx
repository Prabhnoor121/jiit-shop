import React, { Component } from 'react';
import Rate from './rate';
import axios from 'axios'

class Review extends Component {

    constructor() {
        super()
        this.state = {
            review: "",
            place: [],
            rating: "",
            places: [],

        }
        this.changeReview = this.changeReview.bind(this)
        this.changePlace = this.changePlace.bind(this)
        this.changeRate = this.changeRate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    async componentDidMount() {
        const { data: places } = await axios.get("http://localhost:4000/app/search")
        this.setState({ places })

    }

    onSubmit = (event) => {
        event.preventDefault()
        var [id, name] = this.state.place.split("~");
        const registered = {
            review: this.state.review,
            rating: this.state.rating,
            placeId: id,
            placeName: name,



        }

        axios.post("http://localhost:4000/app/review", registered)
            .then(response => console.log(response.data))

        this.setState({
            review: "",
            place: "",
            rating: ""
        })
        window.location = "/"
    }

    changeReview(event) {
        this.setState({
            review: event.target.value
        })
    }
    changePlace(event) {
        this.setState({
            place: event.target.value
        })
    }
    changeRate(event) {
        this.setState({
            rating: event.target.value
        })
    }
    render() {
        return (<div>
            <div className='container'>
                <div className='form-div'>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="movie">Item</label>
                        <select name="movie" id="movie" onChange={this.changePlace} className="form-control">
                            <option value=""></option>
                            {this.state.places.map((option) => (
                                <option key={option._id} value={[`${option._id}~${option.title}`]}>
                                    {option.title}
                                </option>
                            ))}
                        </select>
                        <input type="text"
                            placeholder="Review"
                            onChange={this.changeReview}
                            value={this.state.review}
                            className='form-control form-group'
                        />
                        <Rate id="rating" onChange={this.changeRate} />


                        <input type='submit' className="'btn btn-danger btn block" value='Submit' />

                    </form>
                </div>
            </div>
        </div>);
    }
}

export default Review;