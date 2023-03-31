import "./aboutTeam.css";
import pic from "../Images/shopping.png";

const AboutTeam = () => {
  return (
    <div class="aboutWrapper">
      <div class="background-container">
        <div class="bg-1"></div>
        <div class="bg-2"></div>
      </div>
      <div class="about-container">
        <div class="image-container">
          <img src={pic} id="picture" />
        </div>

        <div class="text-container">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            porro rerum cupiditate expedita distinctio nisi nulla ipsum libero
            molestiae minima Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid,ipsum libero molestiae
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
