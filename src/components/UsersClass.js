import React, { Component } from "react";

class UsersClass extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          this.setState({ users: data });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        {this.state.users.map((item) => {
          return (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Username: {item.username}</p>
              <p>email: {item.email}</p>
              <p>website: {item.website}</p>
              <hr></hr>
            </div>
          );
        })}
      </>
    );
  }
}

export default UsersClass;
