import Logo from "../Images/logo.png";
import "../Components/NavigationBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Avatar from "../Images/21-avatar-outline.png";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import Heart from "../Images/heart.png";

const Navigationbar = () => {
  const [activeLink, setActiveLink] = useState("link1");
  const changeColor = (link) => {
    setActiveLink(link);
  };
  const linkStyle = (linkId) => {
    return {
      backgroundColor: activeLink === linkId ? "#8dd08a" : "white",
    };
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  function isLoggednot() {
    if (isLoggedIn) {
      // redirect to profile page
      window.location.href = "/Profile";
    } else {
      // redirect to login page
      window.location.href = "/Login";
    }
  }
  return (
    <div className="navibody">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="routes">
        <ul>
          <li style={linkStyle("link1")}>
            <Link to="/group1_capstone" onClick={() => changeColor("link1")}>
              Home
            </Link>
          </li>
          <li style={linkStyle("link2")}>
            <Link to="/AboutUs" onClick={() => changeColor("link2")}>
              About Us
            </Link>
          </li>
          <li style={linkStyle("link3")}>
            <Link to="/Shop" onClick={() => changeColor("link3")}>
              Shop
            </Link>
          </li>
          <li style={linkStyle("link4")}>
            <Link to="/Orders" onClick={() => changeColor("link4")}>
              Orders
            </Link>
          </li>
          {/* <li style={linkStyle("link5")}>
            <Link to="/Dashboard" onClick={() => changeColor("link5")}>
              Dashboard
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="icons2">
        <ul>
          <li>
            <Link to="/">
              <div className="icon-container">
                <img src={Heart} alt="" />
                <span>Wishlist</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <div className="icon-container">
                <img src={Cart} alt="" />
                <span>Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <button onClick={isLoggednot}>
              <div className="icon-container">
                <img src={Avatar} alt="" />
                <span>Account</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
