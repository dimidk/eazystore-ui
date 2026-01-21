import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

export default function Login() {
  return (
    <div align="center">
      <PageTitle title="Login Page" />
      <div
        className="container col-4 justify-content-center
      border border-dark rounded"
      >
        <form>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              placeholder="your email..."
            />
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              id="passwd"
              name="password"
              type="password"
              placeholder="your password"
            />
          </div>
          <div className=" mb-3 row">
            {/* <MyButton id="submitBut" name="submitBut" type="submit">
              Login
            </MyButton>{" "}
            <MyButton id="resetBut" name="resetBut" type="reset">
              Reset
            </MyButton> */}
            <button className="btn btn-primary col-sm-5" type="submit">
              Login
            </button>
            <button className="btn btn-secondary col-sm-5" type="reset">
              Reset
            </button>
            {" or "}
            <Link to="/register" className="navLink">
              {" "}
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
