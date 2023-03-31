import "../Pages/Profile.css";

const Profile = () => {
  let logOutUser1 = localStorage.getItem("isLoggedIn");
  let removeCart = localStorage.getItem("cartStorage");
  let removeOrder = localStorage.getItem("orderStorage");
  let removeTime = localStorage.getItem("mytime");

  function logOut() {
    logOutUser1 = localStorage.removeItem("isLoggedIn");
    removeCart = localStorage.removeItem("cartStorage");
    removeOrder = localStorage.removeItem("orderStorage");
    removeTime = localStorage.removeItem("mytime");

    window.location.href = "/Login";
  }
  return (
    <div className="profile-body">
      <h1>Profile Page</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
