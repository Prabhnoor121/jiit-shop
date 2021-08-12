import React, { Component } from 'react';
class LogOut extends Component {
    state = {}
    async componentDidMount() {
        this.logOut()
        window.location = "/"
    }
    logOut = () => {
        localStorage.removeItem("Name")
    }
    render() {
        return (
            null
        );
    }
}

export default LogOut;