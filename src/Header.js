import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import axios from "axios";
import { Class } from "@material-ui/icons";
import { render } from "@testing-library/react";
import SearchPage from "./SearchPage";

class Header extends Component {
  // componentDidMount() {
  //     this.fetchDetails()
  // }

  // fetchDetails = async () => {
  //     const data = await axios.get("http://localhost:4000/app/LogIn")
  //     console.log(data)
  // }

  state = {
    query: "",
    place: [],
    bool: "",
  };

  async componentDidMount() {
    const { data: place } = await axios.get("http://localhost:4000/app/search");
    this.setState({ place });
    const user = this.getDetails();
    const isVerified = this.getVerificationStatus();
    this.setState({
      user,
      isVerified,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window.location = "/search";
  };

  handleSearch = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  getDetails = () => {
    return localStorage.getItem("Name");
  };

  getVerificationStatus = () => {
    return JSON.parse(localStorage.getItem("isVerified"));
  };

  logOut = () => {
    localStorage.removeItem("Name");
  };

  render() {
    return (
      <nav className="header">
        <Link to="/">
          <img
            className="header__icon"
            src="images/3.jpg"
            alt=""
            width="190px"
            height="110px"
          />
        </Link>
        {/* <form onSubmit={this.handleSubmit}>
                    <div className="header__center">
                        <input type="text"
                            name="query"
                            placeholder="Search"
                            value={this.state.query}
                            onChange={this.handleSearch}
                        />
                        <input type='submit' className="'btn btn-danger btn block" value="search" />

                    </div>
                </form> */}
        <div className="header__right">
          <div className="nav-options">
            {/* For applying for verification */}

            {!this.state.isVerified && (
              <div className="nav-item add">
                <Link to="/verify" className="psr">
                  <p>Get Verified</p>
                </Link>
              </div>
            )}
            {/* For Adding Items */}
            {this.state.isVerified && (
              <div className="nav-item add">
                <Link to="/host" className="psr">
                  <p>Add Item</p>
                </Link>
              </div>
            )}

            <div className="nav-item add">
              <Link to="/review" className="psr">
                <p>Review</p>
              </Link>
            </div>
            <div className="nav-item add">
              <Link to="/wishlist" className="psr">
                <p>Add to Cart</p>
              </Link>
            </div>
          </div>
          <div className="user-wrapper">
            {this.state.user && (
              <div className="nav-item">Welcome {this.state.user} </div>
            )}
            {this.state.user && (
              <div className="nav-item">
                {" "}
                <Link to="/logOut" className="psr">
                  <p>Logout</p>
                </Link>
              </div>
            )}
            {!this.state.user && (
              <div className="nav-item">
                <Link to="/LogIn" className="psr">
                  <p>Login</p>
                </Link>
              </div>
            )}
            {!this.state.user && (
              <div className="nav-item">
                <Link to="/Signup" className="psr">
                  <p>Register</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
