import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount(){
    // console.log("parent did mount");
  }
  render(){
    // console.log("parent Render");
    return (
      <div>
     


      <UserClass name={"Gaurav (class)"} location={"Almora"}/>
     
      </div>

    )
  }
}


export default About;