import React, { Component } from "react";
import axios from "axios";
class VerifyUser extends Component {
  constructor() {
    super();
    this.state = {
      Enrollment: "",
      Room: "",
      Contact: "",
      file: null,
    };
    this.changeLocation = this.changeLocation.bind(this);
    this.changeDetails = this.changeDetails.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    // event.preventDefault()
    //const file = event.target.files[0];
    // const registered = {
    //     Enrollment: this.state.Enrollment,
    //     Room: this.state.Room,
    //     Contact: this.state.Contact,
    //     file: this.state.file
    // }
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("Enrollment", this.state.Enrollment);
    formData.append("Room", this.state.Room);
    formData.append("Contact", this.state.Contact);
    formData.append("file", file);
    formData.append("userId", localStorage.getItem("userId"));
    axios
      .post("http://localhost:4000/app/verify", formData)
      .then((response) => console.log(response.data));

    this.setState({
      Enrollment: "",
      Room: "",
      Contact: "",
      file: null,
    });
    window.location = "/";
  };

  changeLocation(event) {
    this.setState({
      Enrollment: event.target.value,
    });
  }

  changeTitle(event) {
    console.log("On Changing Title");
    this.setState({
      Room: event.target.value,
    });
  }

  changeDetails(event) {
    this.setState({
      Contact: event.target.value,
    });
  }

  changePrice(file) {
    console.log("On Adding file");
    console.log(file);
    this.setState({
      file: file,
    });
    console.log(this.state.file);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <center>
              <h1>
                <b>Verify Yourself</b>
              </h1>
            </center>
            <form>
              <input
                type="number"
                placeholder="Enrollment Number"
                onChange={this.changeLocation}
                value={this.state.Enrollment}
                className="form-control form-group"
              />
              <input
                type="number"
                placeholder="Room No."
                onChange={this.changeTitle}
                value={this.state.Room}
                className="form-control form-group"
              />

              <input
                type="number"
                placeholder="Contact No."
                onChange={this.changeDetails}
                value={this.state.Contact}
                className="form-control form-group"
              />

              <input
                type="file"
                label="Upload you file card(jpg)"
                onChange={this.onSubmit}
                className="form-control form-group"
              />

              {/* <input  type='submit' className="'btn btn-danger btn block" value='Submit' /> */}
              <button
                onClick={this.onSubmit}
                className="'btn btn-danger btn block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyUser;
