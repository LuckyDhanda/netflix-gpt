import React, { useState, useEffect } from "react";
import logo from "../assets/images/netflix-logo.webp";
import userIcon from "../assets/images/user-icon.png";

import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Log Out successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // user is coming from Firebase Authentication
      if (user) {
        // user sign in
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div
      className={`py-6 px-10 fixed top-0 left-0 right-0 flex items-center justify-between z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <img src={logo} alt="Logo" className="w-32 h-auto" />
      {user && (
        <div className="relative" onClick={handleDropdown}>
          <img
            className="w-8 h-8 cursor-pointer"
            src={userIcon}
            alt="user-icon"
          />

          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 w-40 bg-black text-white rounded shadow-lg py-2">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  <div className="flex gap-2 items-center">
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full "
                    />
                    {user.displayName}
                  </div>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer pl-10 text-red-500 font-bold"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
