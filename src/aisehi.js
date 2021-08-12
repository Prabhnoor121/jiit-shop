import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { NavLink } from "react-router-dom";
import '../CSS/loginform.css';
import { login } from "../services/authService";
import { currentUser } from "./../services/authService";
import { Redirect } from "react-router-dom";
/*import  axios  from 'axios';*/


class LoginForm extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {},
    }

    schema = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password"),
    };
    /*doSubmit = () => {
      
      axios.post("http://localhost:4000/app/login", { email: this.state.data.email,password: this.state.data.password })
    
     
    .then(response => console.log(response.data))
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/home";
    
    this.setState({data:{
      email: "", password: "", name: ""
    } })
  };*/

    doSubmit = async () => {
        try {
            const { email, password } = this.state.data;

            await login(email, password);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : "/home";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="loginform">
                    <br /><br />
                    <h1>Login</h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>

                        {this.renderInput("email", "Email")}
                        {this.renderInput("password", "Password", "password")}

                        {this.renderButton("Login")}

                    </form>

                    <NavLink className="nav-link register" to="/register">
                        <h6>Register?</h6>
                    </NavLink>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;