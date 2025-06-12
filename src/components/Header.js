import { useState, useEffect } from "react";
import logo from "../assets/images/netflix-logo.webp";
import userIcon from "../assets/images/user-icon.png";

import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleSearchView } from "../utils/searchSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const searchView = useSelector((store) => store.search.showSearchView);

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

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
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
      className={`py-6 px-10 fixed top-0 left-0 right-0 flex items-center justify-between z-2 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <img src={logo} alt="Logo" className="w-32 h-auto" />
      {user && (
        <div className="flex gap-4">
          <button
            onClick={handleSearchClick}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 opacity-50 text-black rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {searchView ? (
              <p>Go To Home</p>
            ) : (
              <>
                🔍 <span className="font-medium">Search</span>
              </>
            )}
          </button>

          <div className="relative" onClick={handleDropdown}>
            <img
              className="w-10 h-10 cursor-pointer"
              src={userIcon}
              alt="user-icon"
            />

            {isDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg py-2 border border-gray-700">
                <ul className="text-sm space-y-1">
                  <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full border border-white"
                      />
                      <span className="font-medium">{user.displayName}</span>
                    </div>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer pl-10 text-red-500 font-semibold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
