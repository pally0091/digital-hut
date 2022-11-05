import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white lg:w-1/3 sm:w-full md:w-1/2  mx-auto rounded p-5 mt-20">
      <h1 className="text-xl font-bold ">Login ...</h1>
      <br />
      <input
        type="email"
        placeholder="Your Email"
        className="bg-slate-200 p-2 rounded mt-2 w-full"
      ></input>
      <br />
      <br />
      <input
        type="password"
        placeholder="Your Password"
        className="bg-slate-200 p-2 rounded mt-2 w-full"
      ></input>
      <br />
      <br />
      <div className="w-1/2 mx-auto">
        <button className="text-center w-full font-bold bg-sky-600 p-2 rounded hover:bg-lime-400">
          Login
        </button>
      </div>
      <p className="text-center mt-2">
        New Here{" "}
        <span className="text-blue-600">
          <Link to="/register">Register Here</Link>
        </span>{" "}
      </p>
      <p>Login with </p>
      <div className="flex justify-evenly mt-2">
        <button className="bg-white shadow-md rounded hover:bg-green-600 p-2 w-1/3 ">
          Google
        </button>
        <button className="bg-white shadow-md rounded hover:bg-blue-600 p-2 w-1/3 ">
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
