import "../Pages/Orders.css"

const Orders = () => {
    let OrderStorage = JSON.parse(localStorage.getItem("orderStorage"))
    return ( 
        <div className="theOrderPage">
            <h1>Order Page</h1>
            <div className="fromCart">
            {OrderStorage && OrderStorage.length > 0 ? (
                OrderStorage.map((itemness) => {
                    return (
                        <div className="myOrder">
                            <p>Your Order is out for delivery!</p>
                            <div className="thisOrder">
                                <div class="order-img-box">
                                    <img src={itemness.Image} class="product-img" />
                                </div>

                                <div className="orderDetail">
                                    <h3 className="order-product-name">{itemness.Products}</h3>
                                    <div className="orderWrapper">
                                        <h3 id="OrderPrice">₱{itemness.Price}</h3>
                                    </div>
                                </div>
                                <button className="OrderRecieved">
                                    Order Recieved
                                </button>
                            </div>
                        </div>
                    );
                  })
                ) : (
                <h1>You don't have an order</h1>
            )}
            </div>
        </div>
     );
}
 
export default Orders;