import "./HeroCard.css";
import Image1 from "../Images/breadcard.jpg";
import CardSmall from "./CardSmall";

const HeroCard = (props) => {
  return (
    <div className="heroWrapper">
      <div className="heroBody">
        <img src={Image1} alt="" />
        <div className="heroContent">
          {/* <p> 10 Products</p> */}
          <h1>Bakery</h1>
          <p>Freshly baked delights down the aisle.</p>
        </div>
      </div>
      <CardSmall />
    </div>
  );
};

export default HeroCard;
