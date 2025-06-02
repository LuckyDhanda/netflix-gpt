import React, { useState } from "react";
import Header from "./Header";
import backgroundImg from "../utils/images/netflix-background-image.jpg";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-screen h-screen text-white">
      <Header />
      <img
        src={backgroundImg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>
      <div className="flex justify-center item-center h-auto ">
        <form className="bg-black bg-opacity-70 p-10 rounded-md flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h2 className="text-3xl font-bold pb-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="p-3 m-4 rounded-md bg-inherit border border-gray-400 border-solid focus:outline-none focus:ring-0 text-gray-400"
            />
          )}
          <input
            type="email"
            placeholder="Email or mobile number"
            className="p-3 m-4 rounded-md bg-inherit border border-gray-400 border-solid focus:outline-none focus:ring-0 text-gray-400"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-3 m-4 rounded-md bg-inherit border border-gray-400 border-solid focus:outline-none focus:ring-0 text-gray-400"
          />
          <button className="p-3 m-4 rounded-md bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between item-center text-sm text-gray-400">
            <label className="flex item-center space-x-2">
              <input
                type="checkbox"
                className="accent-red-600 cursor-pointer"
              />
              <span>Remember me</span>
            </label>
            <a href="/" className="hover:underline">
              Need help?
            </a>
          </div>

          {isSignInForm ? (
            <div className="text-gray-400 text-sm py-2">
              New to Netflix?{" "}
              <span
                onClick={toggleSignInForm}
                className="text-white hover:underline cursor-pointer "
              >
                Sign up now.
              </span>
            </div>
          ) : (
            <div className="text-gray-400 text-sm py-2">
              Already a user.{" "}
              <span
                onClick={toggleSignInForm}
                className="text-white hover:underline cursor-pointer "
              >
                Sign in Now.
              </span>
            </div>
          )}

          <p className="text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Learn more
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
