import React, { Component } from 'react';
import axios from 'axios'
class Host extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
            title: '',
            details: '',
            price: ''
        }
        this.changeLocation = this.changeLocation.bind(this)
        this.changeDetails = this.changeDetails.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }



    onSubmit = (event) => {
        event.preventDefault()

        const registered = {
            location: this.state.location,
            title: this.state.title,
            details: this.state.details,
            price: this.state.price,
            verifiedId: localStorage.getItem("verifiedId"),
        }

        axios.post("http://localhost:4000/app/host", registered)
            .then(response => console.log(response.data))

        this.setState({
            location: "",
            title: "",
            details: "",
            price: ""
        })
        window.location = "/"
    }

    changeLocation(event) {
        this.setState({
            location: event.target.value
        })
    }

    changeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    changeDetails(event) {
        this.setState({
            details: event.target.value
        })
    }

    changePrice(event) {
        this.setState({
            price: event.target.value
        })
    }



    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <center>
                            <h1><b>Add Item</b></h1>
                        </center>
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder="Item Name"
                                onChange={this.changeLocation}
                                value={this.state.location}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='Seller'
                                onChange={this.changeTitle}
                                value={this.state.title}
                                className="form-control form-group"
                            />

                            <input type='text'
                                placeholder='Details'
                                onChange={this.changeDetails}
                                value={this.state.details}
                                className="form-control form-group"
                            />

                            <input type='number'
                                placeholder='Price'
                                onChange={this.changePrice}
                                value={this.state.price}
                                className="form-control form-group"
                            />

                            <input type='submit' className="'btn btn-danger btn block" value='Submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Host;
