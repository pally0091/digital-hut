import React from "react";
import { Link } from "react-router-dom";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import app from '../../firebase.config'

const Register = () => {
  const auth =getAuth(app);
  const gProvider = new GoogleAuthProvider();

  const googleLoginHandler = ()=> {
    signInWithPopup(auth, gProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="bg-white lg:w-1/3 sm:w-full md:w-1/2 mx-auto rounded p-5 mt-20">
      <h1 className="text-xl font-bold ">Register ...</h1>
      <br />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="bg-slate-200 p-2 rounded mt-2 w-full"
      ></input>
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="bg-slate-200 p-2 rounded mt-2 w-full"
      ></input>
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Your Password"
        className="bg-slate-200 p-2 rounded mt-2 w-full"
      ></input>
      <br />
      <br />
      <div className="w-1/2 mx-auto">
        <button className="text-center w-full font-bold bg-sky-600 p-2 rounded hover:bg-lime-400">
          Sign Up
        </button>
      </div>
      <p className="text-center mt-2">
        Already have an account
        <span className="text-blue-600">
          <Link to="/login"> Login Here</Link>
        </span>
      </p>
      <p>Login with </p>
      <div className="flex justify-evenly mt-2">
        <button onClick={googleLoginHandler} className="bg-white shadow-md rounded hover:bg-green-600 p-2 w-1/3 ">
          Google
        </button>
        <button className="bg-white shadow-md rounded hover:bg-blue-600 p-2 w-1/3 ">
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
