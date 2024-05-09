import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <User name="Reema Sahu function" location="Ainthapali"/>
        <UserClass
          child="first"
          name="Reema Sahu class"
          location="Khetrajpur"
        />
      </div>
    );
  }
}

export default Contact;
