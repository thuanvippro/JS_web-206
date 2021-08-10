
import React, { useState, useEffect } from 'react';
const Manager = ({login,error}) => {
  const [details,setDetails]=useState({name:"", email:"", password:""});
  const submitHandle=e=>{
      e.preventDefault();
      login(details);
  }
  return (
    <div>
        <form onSubmit={submitHandle}>
          username
          <input type="text"
           name="name"
           onChange={e=>setDetails({...details,name: e.target.value})}
           value={details.name}
           />
          email
          <input type="email"
           name="email"
           onChange={e=>setDetails({...details,email: e.target.value})}
           value={details.email}
           />
          pass
          <input type="password"
           name="password"
           onChange={e=>setDetails({...details,password: e.target.value})}
           value={details.password}
           />
          <input type="submit" value="login"/>
        </form>
    </div>
  )
}

export default Manager
