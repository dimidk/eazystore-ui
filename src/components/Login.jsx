import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

export default function Login() {
  return (
    <div align="center">
      <PageTitle title="Login Page" />
      <div>
        <form>
          <div>
            <label for="username">Username</label>
            <input
              id="email"
              name="username"
              type="text"
              placeholder="your email..."
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="passwd"
              name="password"
              type="password"
              placeholder="your password"
            />
          </div>
          <div align="space-between">
            <MyButton id="submitBut" name="submitBut" type="submit">
              Login
            </MyButton>{" "}
            <MyButton id="resetBut" name="resetBut" type="reset">
              Reset
            </MyButton>
            {" or "}
            <Link to="/register"> Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
