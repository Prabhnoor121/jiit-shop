import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Signup.css";
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: null,
      roomNumber: null,
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    console.log("Product ID", this.props.match.params.id);
    const { data } = await axios.get(
      `http://localhost:4000/app/getProductAndSeller/${this.props.match.params.id}`
    );
    this.setState({
      phoneNumber: data.finalData.sellerNumber,
      roomNumber: data.finalData.sellerRoom,
    });
    console.log(data.finalData);
  }

  // event.preventDefault() means the page after submit wont work as defaullt i.e, i wont reload (default is it reloads)
  onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    this.setState({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });
    window.location = "/LogIn";
  };
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeUserName(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  // onChange means if the value is changed the onchange will be called
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <center>
              <h1>
                <b>Payment</b>
              </h1>
            </center>
            <form onSubmit={this.onSubmit}>
              <div className="form-check">
                <input
                  type="radio"
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className="form-check-input"
                  id="btn-check-outlined"
                  autoComplete="off"
                />
                <label className="form-check-label" for="btn-check-outlined">
                  UPI {this.state.phoneNumber}
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  className="form-check-input"
                  id="btn-check-outlined-1"
                  autoComplete="off"
                />
                <label
                  className="form-check-label  "
                  for="btn-check-outlined-1"
                >
                  Cash On Delivery {this.state.roomNumber}
                </label>
              </div>

              {/* <input type='text'
                                placeholder='Username'
                                onChange={this.changeUserName}
                                value={this.state.username}
                                className="form-control form-group"
                            />

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
        /> */}

              <input
                type="submit"
                className="'btn btn-danger btn block"
                value="Done"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
