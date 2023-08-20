'use client'

import React from "react";
import Cookie from "universal-cookie";
import jwt from 'jwt-decode';
import jwtDecode, { JwtPayload } from "jwt-decode";


/*interface MyToken {
  id: string;
  iat: string;
  exp: number;
  // whatever else is in the JWT.
}
*/
/*interface User {
  uid: string;
  name: string;
  exp: number;
}
*/



export default function LoginForm() {

  let cookie = new Cookie();
  
  let [jwtToken, setJwtToken] = React.useState("")
  let [user, setUser] = React.useState({})

  
  
  const callApiLogin = async (event:any) => {
    try {
      event.preventDefault();
  
      const formData = new FormData(event.target);
    
      const email = formData.get('username');
      const password = formData.get('password')
      const formattedFormData = { email,password }


      const res = await fetch(`https://deploy-demo-3rd-try.fly.dev/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        
        body: JSON.stringify(formattedFormData)
      });
    
      const data = await res.json()

      setJwtToken(jwtToken = data.token) 
      try {
        let decoded = jwt(jwtToken || '') || null;
        //console.log(decoded)
        setUser(user = decoded)
        //console.log(user)

        try {
          cookie.set('jwt_authorization', jwtToken, {
            //expires: new Date(decoded.exp = 1000),
          })
        } catch(error) {
          console.log(error)
        }
        
        console.log(user)
      } catch(error) {
        console.log(error)
      }
      //console.log(data)


      
        
      
      
      

      
      
      
    } catch (err) {
     console.log(err);
    }
  };
  
  //make sure dom is loaded
  /*
  if (typeof document !== 'undefined') {
    let element = document.querySelector('.class-name')
    
    // Manipulating the DOM here
    const form = document.querySelector('#loginDataForm');
    form?.addEventListener('submit', callApiLogin);
 }
 */
    if(jwtToken === ""){
      return (
        <div className="">
          <form className="flex flex-col" id="loginDataForm" onSubmit={callApiLogin}>
            
            <label htmlFor="username">Username:</label>
            <input type="username" name="username" id="username" />
  
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
  
            <button type="submit">Submit</button>
          </form>
        </div>
             )

    }
    else {
      return (
        <h1>Hello {user.name}!</h1>
      )
    }
    
}


