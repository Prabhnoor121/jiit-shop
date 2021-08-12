import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            showErrMsg: false
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // componentDidMount() {
    //     this.fetchDetails()
    // }


    // fetchDetails = async () => {
    //     const data = await axios.get("http://localhost:4000/app/LogIn", { email: this.state.email, password: this.state.password })
    //     console.log(data)
    // }

    onSubmit = async (event) => {
        event.preventDefault()

        const registered = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(registered)
        try {
            const { data: user } = await axios.post("http://localhost:4000/app/LogIn", registered)

            console.log(user)
            //localStorage.setItem("email", user.user.email)
            localStorage.setItem("Name", user.user.fullName)
            // const { state } = this.props.location;
            // window.location = state ? state.from.pathname : "/";
            window.location = "/";
            // this.setState({
            //     email: "",
            //     password: ""
            // })
        } catch (err) {
            if (err)
                // this.setState({ showErrMsg: true })
                alert("Invalid Credentials");
        }
    }



    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='form-div'>
                    <center>
                        <h1><b>Login</b></h1>
                    </center>
                    <form onSubmit={this.onSubmit}>
                        <input type='email'
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                        />

                        <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className="form-control form-group"
                        />

                        <input type='submit' className="'btn btn-danger btn block" value='Submit' onClick={this.onSubmit} />

                    </form>
                </div>
            </div>
        )

    }

}
export default LogIn