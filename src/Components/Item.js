import "../Components/Item.css";
import { useState } from "react";
import Cart from "../Pages/Cart";

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState('none');
  const [quantity, setQuantity] = useState(0);
  // const [cart, setCart] = useState([]);
  // const [Items, setItems] = useState(``);

<<<<<<< HEAD
  function addToCart(name) {
    const newCartItem = {
      Products: props.prodName,
      Price: props.price,
      Image: props.image,
    };
    setCart([...cart, newCartItem]);
    localStorage.setItem("cartStorage", JSON.stringify([...cart, newCartItem]));
=======
  function addToCart(name, price, image){
    if(localStorage.getItem("cartStorage")){
        let cart = JSON.parse(localStorage.getItem("cartStorage"));
        cart.push({Products: name, Price: price, Image: image});
        localStorage.setItem("cartStorage", JSON.stringify(cart));
        alert();
    }else{
        let cart = [];
        cart.push({Products: name, Price: price, Image: image});
        // setCart(cart);
        localStorage.setItem("cartStorage", JSON.stringify(cart));
    }
>>>>>>> 4c96e0077c137b8d192240636a81099a33ed76db
  }

  // function addToCart(locla){
  //   if(){

  //   }
  //   cart.push({Products: props.prodName, Price: props.price, Image: props.image});
  //   setCart(cart);
  //   localStorage.setItem("cartStorage", JSON.stringify(cart));
  //   showCart();
  // }

  const prodQuantity = (e) => {
    const btnId = e.target.id;
    switch (btnId){
      case "plus":
        setQuantity((quantity) + 1);
        break;
      case "minus":
        setQuantity(quantity === 0 ? 0 : quantity - 1);
        break;
      default:
        break;
    }
  };

  const modalOpen = () =>{
    setOpen(open === 'none' ? 'flex' : 'none');
  }

  function toggleModal() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }

  return (
    <div className="itemBody">
      <div className="imgContainer">
        <img src={props.image} />
      </div>
      <div className="prodName">
        <p className="stat">{props.stat}</p>
        <h1>{props.prodName}</h1>
        <div className="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          (4.0)
        </div>
      </div>
      <div className="btnContainer">
        <h1>₱{props.price}</h1>
        <div>
          <button id="buy"
            onClick={() => {
              toggleModal();
              modalOpen();
            }}
          >
            <img src={props.cart} /> Buy
          </button>

          <div className="modal" style={{ display: open }}>
            <div className="modal-content">
              <div className="modal-image">
                <img src={props.image} />
              </div>
              <div className="product-details">
                <div className="modal-head">
                  <h1>{props.prodName}</h1>
                  <div className="star modal-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    (4.0)
                  </div>
                </div>
                <div className="modalQaunt">
                  <h2 className="modal-price">₱{props.price}</h2>
                  <p className="theQuant">(125 quantity)</p>
                </div>
                <div className="quantity">
<<<<<<< HEAD
                  <button id="minus" onClick={prodQuantity}>
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <button id="plus" onClick={() => prodQuantity()}>
                    +
                  </button>
=======
                  <button id="minus" onClick={prodQuantity}>-</button>
                  <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
                  <button id="plus" onClick={prodQuantity}>+</button>
>>>>>>> 4c96e0077c137b8d192240636a81099a33ed76db
                </div>
                <div className="modal-buy">
                <button className="modal-AddtoCart" onClick={() => addToCart(props.prodName, props.price, props.image)}><img src={props.cart} /><h2>Add to Cart</h2></button>
                  <button className="modal-buyNow"><h2>Buy Now</h2></button>
                </div>
              </div>
            </div>
            <div className="modal-btn">
              <p onClick={() => {toggleModal(); modalOpen()}}><i class="fa-solid fa-x"></i></p>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div style={{ display: "none" }}>
        <Cart cart={cart}></Cart>
      </div>
=======
>>>>>>> 4c96e0077c137b8d192240636a81099a33ed76db
    </div>
  );
};

export default Item;
