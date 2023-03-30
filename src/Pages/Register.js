import "../Pages/LoginPage.css";
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/register.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUsers] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    let getUser = new FormData();
    getUser.append("firstname", firstName);
    getUser.append("lastname", lastName);
    getUser.append("email", email);
    getUser.append("passy", password);
    getUser.append("confirmPassword", confirmPassword);
    getUser.append("userName", userName);

    axios({
      method: "POST",
      url: "http://localhost/grocerease_database/addUser.php",
      data: getUser,
    }).then(function (response) {
      alert("Account Successfully Added");
      window.location.href = "/Login";
    });
  };

  useEffect(() => {
    const url = "http://localhost/WD34P_PHP/wd34p_exercise36_serrano_db.php";
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="loginBody">
      <img src={Bg} id="bg" />
      <div className="loginContainer">
        <div className="loginForm">
          <div className="lForm">
            <div className="welcome">
              {/* <span>Welcome to</span> */}
              <h1 className="fadeRegi">Sign Up</h1>
              <ul></ul>
            </div>
            <img src={ShoImg} id="hideImg" />
            <div className="logform">
              {/* {warningText && <p className="warningText">{warningText}</p>} */}
              <form>
                <div className="regi-name">
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="inText"
                    id="fName"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lName"
                    placeholder="Last Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="inText"
                  id="email"
                  // autoComplete="off"
                  required
                />
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  className="inText"
                  id="fName"
                  required
                />
                <div className="passy">
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="passi"
                    placeholder="Password"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="passy">
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmpass"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                  />
                </div>

                <button onClick={addUser} id="submitId">
                  Sign Up
                </button>
                <Link to="/Login" className="fadeRegi">
                  Go back to Login Page
                </Link>
              </form>
            </div>
          </div>
          <div className="imgContent">
            <img src={ShoImg} className="regiBg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
