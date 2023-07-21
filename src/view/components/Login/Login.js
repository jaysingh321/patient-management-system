import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="background-image"></div>

      <div className="form-container">
        <div className="heading">
          <h2>Login</h2>
        </div>
        <form>
          <div class="txt_field">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <br />
          <div className="txt_field">
            <input type="password" name="Password" placeholder="Password" />
          </div>
          <br />
          <div className="pass">Forget Password ?</div>
          <div className="Loginbutton">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}
