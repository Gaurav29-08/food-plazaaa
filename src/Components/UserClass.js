import React  from "react"
class UserClass extends React.Component{
constructor(props){
  super(props);

  this.state={
    userInfo:{
      nmae:"Dummy",
      location:"Almora",
      avatar_url:"https//dummyphoto.com"

    }
  };
  // console.log("child constructor");

}

async componentDidMount(){
  // console.log("child did mount");
  //api call
  const data = await fetch("https://api.github.com/users/Gaurav29-08")

  const json = await data.json();
  this.setState

  this.setState({
    userInfo:json,
  });

  console.log(json);
}

componentDidUpdate(){
  console.log("component did mount");
}

componentWillUnmount(){
  console.log("comp will unmount");
}


  render(){
     
    const{name,location,avatar_url} = this.state.userInfo;
    // console.log("child render");
    return (
      <div className="user-card">
       <img src={avatar_url} />
        <h1>Name:{name}</h1>
        <h3>Location:{location}</h3>
        <h4>Contact : gauravsirari424@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass;  