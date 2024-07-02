import { useState,useEffect } from "react";



const User = ({name,location})=>{

const [count,setCount] = useState(0);

useEffect(()=>{
  // const timer = setInterval(()=>{
  //   console.log("namste react");
  // },1000);

  // return()=>{
  //   clearInterval(timer)

  // };
},[]);


  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
     <button onClick={()=>{
      setCount(count+1)

     }}> Count increase 
      </button>
      <h1>Name : {name}</h1>
      <h3>Location: {location}</h3>
      <h4>Contact:gauravsirari424@gmail.com</h4>
    </div>

  )
}

export default User;