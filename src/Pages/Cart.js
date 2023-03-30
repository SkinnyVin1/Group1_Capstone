import Footer from "../Components/Footer";
import "./CartPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import product1 from "../Images/shop-images/Products/p1.png";
import product2 from "../Images/shop-images/Products/p2.png";

const Cart = () => {
    return (
        <main class="container">
            <h1 class="heading">Shopping Cart</h1>
            <div class="item-flex">
                <section class="cart">
                    <div class="cart-item-box">
                        <h2 class="section-heading">Order Summary</h2>
                        <div class="product-card">
                            <div class="card">
                                <div class="img-box">
                                    <img src={product1}  class="product-img"/>
                                </div>
                                <div class="detail">
                                    <h4 class="product-name">Coca Cola</h4>
                                    <div class="wrapper">
                                        <div class="product-qty">
                                            <button id="decrement">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                            <span id="quantity">1</span>
                                            <button id="increment">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <div class="price">
                                            $ <span id="price">1.25</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="product-close-btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
            
                        <div class="product-card">
                            <div class="card">
                                <div class="img-box">
                                    <img src={product2} width="80px" class="product-img"/>
                                </div>
                                <div class="detail">
                                    <h4 class="product-name">Sprite</h4>
                                    <div class="wrapper">
                                        <div class="product-qty">
                                            <button id="decrement">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                            <span id="quantity">1</span>
                                            <button id="increment">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <div class="price">
                                            $ <span id="price">0.80</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="product-close-btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="discount-token">
                            <label for="discount-token" class="label-default">Gift card/Discount code</label>
                            <div class="wrapper-flex">
                                <input type="text" name="discount-token" id="discount-token" class="input-default"/>
                                <button class="btn btn-outline">Apply</button>
                            </div>
                        </div>
                        <div class="amount">
                            <div class="subtotal">
                                <span>Subtotal</span> <span>$ <span id="subtotal">2.05</span></span>
                            </div>
                            <div class="tax">
                                <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
                            </div>
                            <div class="shipping">
                                <span>Shipping</span> <span>$ <span id="shipping">0.00</span></span>
                            </div>
                            <div class="total">
                                <span>Total</span> <span>$ <span id="total">2.15</span></span>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="checkout">
                    <h2 class="section-heading">Payment Details</h2>
                    <div class="payment-form">
                        <div class="payment-method">
                            <button class="method selected">
                                <i class="fa-regular fa-credit-card"></i>  
                                <span>Credit Card</span>
                            </button>
                
                            <button class="method">
                                <i class="fa-brands fa-paypal"></i>
                                <span>PayPal</span>
                            </button>
                        </div>
            
                        <form action="#">
                            <div class="cardholder-name">
                                <label for="cardholder-name" class="label-default">Cardholder name</label>
                                <input type="text" name="cardholder-name" id="cardholder-name" class="input-default"/>
                            </div>
                            <div class="card-number">
                                <label for="card-number" class="label-default">Card number</label>
                                <input type="number" name="card-number" id="card-number" class="input-default"/>
                            </div>
                    
                            <div class="input-flex">
                                <div class="expire-date">
                                    <label for="expire-date" class="label-default">Expiration date</label>
                                    <div class="input-flex">
                                        <input type="number" name="day" id="expire-date" placeholder="" min="1" max="31" class="input-default"/>
                                        <input type="number" name="month" id="expire-date" placeholder="" min="1" max="12" class="input-default"/>
                                    </div>
                                </div>
                                <div class="cvv">
                                    <label for="cvv" class="label-default">CVV</label>
                                    <input type="number" name="cvv" id="cvv" class="input-default"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button class="btn btn-primary">
                        <b>Checkout</b>
                    </button>
                </section>
            </div>
        </main>
    );
}
 
export default Cart;