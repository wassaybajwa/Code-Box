import React from "react";
import Input from "./Input";

function Login() {
  return <form className="form">
  <Input 
  type="text"
  placeholder="username"
  />
<Input 
  type="text"
  placeholder="password"
  />

  <input type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>


}

export default Login;