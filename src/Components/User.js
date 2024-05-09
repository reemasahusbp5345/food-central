import { useEffect, useState } from "react";

const User = ({ name,location }) => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(1);
    useEffect(()=>{
      const timer=setInterval(()=>{
      },1000)
      return(()=>{
         clearInterval(timer)
      })
    },[])
  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Count1 : {count1}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : reemsahusbp5345@</h4>
    </div>
  );
};

export default User;
