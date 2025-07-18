import React, { useState, useRef } from "react";
import Header from "./Header";
import backgroundImg from "../assets/images/netflix-background-image.webp";
import { photoURL } from "../utils/constants";
import { checkValidateData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage("");
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const name = isSignInForm ? null : nameRef.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validationStatusMessage = checkValidateData(name, email, password);
    setErrorMessage(validationStatusMessage);
    if (validationStatusMessage) return;

    setIsLoading(true);

    if (!isSignInForm) {
      // SIGN UP Flow
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          setTimeout(() => navigate("/browse"), 1000);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setIsLoading(false);
        });
    } else {
      // SIGN IN Flow
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          setTimeout(() => navigate("/browse"), 1000);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="relative w-screen h-screen text-white">
      <Header />
      <img
        src={backgroundImg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-[30]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-20"></div>

      <div className="flex justify-center items-center h-full">
        {isLoading ? (
          <div className="text-white text-xl font-bold animate-pulse">
            Loading...
          </div>
        ) : (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black bg-opacity-70 px-10 py-16 rounded-md flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
          >
            <h2 className="text-3xl font-bold pb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignInForm && (
              <input
                ref={nameRef}
                type="text"
                placeholder="Full name"
                className="p-3 m-4 rounded-md bg-inherit border border-gray-400 text-gray-400"
              />
            )}
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="p-3 m-4 rounded-md bg-inherit border border-gray-400 text-gray-400"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-3 m-4 rounded-md bg-inherit border border-gray-400 text-gray-400"
            />
            <p className="mx-4 text-red-600 font-bold">{errorMessage}</p>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="p-3 m-4 rounded-md bg-red-700 hover:bg-red-800"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center space-x-2">
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

            <div className="text-gray-400 text-sm py-2">
              {isSignInForm ? "New to Netflix? " : "Already a user? "}
              <span
                onClick={toggleSignInForm}
                className="text-white hover:underline cursor-pointer"
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </div>

            <p className="text-xs text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="/" className="text-blue-500 hover:underline">
                Learn more
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
