// import "../Components/Products.css";
// import product1 from "../Images/shop-images/Products/cola.jpg";
import "../Components/Products.css";
import product1 from "../Images/shop-images/Products/p1.png";
import product2 from "../Images/shop-images/Products/p2.png";
import product3 from "../Images/shop-images/Products/p3.png";
import product4 from "../Images/shop-images/Products/p4.png";
import product5 from "../Images/shop-images/Products/p5.png";
import product6 from "../Images/shop-images/Products/p6.png";
import product7 from "../Images/shop-images/Products/p7.png";
import product8 from "../Images/shop-images/Products/p8.png";
import product9 from "../Images/shop-images/Products/c1.png";
import product10 from "../Images/shop-images/Products/c2.png";
import product11 from "../Images/shop-images/Products/c3.png";
import product12 from "../Images/shop-images/Products/c4.png";
import product13 from "../Images/shop-images/Products/c5.png";
import product14 from "../Images/shop-images/Products/c6.png";
import product15 from "../Images/shop-images/Products/s1.png";
import product16 from "../Images/shop-images/Products/s2.png";
import product17 from "../Images/shop-images/Products/s3.png";
import product18 from "../Images/shop-images/Products/s4.png";
import product19 from "../Images/shop-images/Products/s5.png";
import product20 from "../Images/shop-images/Products/m1.png";
import product21 from "../Images/shop-images/Products/m2.png";
import product22 from "../Images/shop-images/Products/m3.png";
import product23 from "../Images/shop-images/Products/m4.png";
import product24 from "../Images/shop-images/Products/m5.png";
import product25 from "../Images/shop-images/Products/d1.png";
import product26 from "../Images/shop-images/Products/d2.png";
import product27 from "../Images/shop-images/Products/d3.png";
import product28 from "../Images/shop-images/Products/d4.png";
import product29 from "../Images/shop-images/Products/d5.png";
import product30 from "../Images/shop-images/Products/v1.png";
import product31 from "../Images/shop-images/Products/v2.png";
import product32 from "../Images/shop-images/Products/v3.png";
import product33 from "../Images/shop-images/Products/v4.png";
import product34 from "../Images/shop-images/Products/v5.png";
import Item from "./Item";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import ProdCat from "./ProductCategory";
import prodAd from "../Images/shop-images/Products/PR.jpg";
import { useEffect, useState } from 'react';

const Product = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };
  
        handleResize();
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div className="product">
      <h1 className="shopHead">SHOP NOW</h1>
      <div className="shopNow">
        <div className="ProductItems">
          <Item

            image={product1}
            stat="IN STOCK"
            prodName={isMobile ? "Coca..." : "Coca-Cola"}
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product2}
            stat="IN STOCK"
            prodName="Sprite"
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product3}
            stat="IN STOCK"
            prodName="Pepsi"
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product4}
            stat="IN STOCK"
            prodName="Fanta"
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product5}
            stat="IN STOCK"
            prodName={isMobile ? "Mons..." : "Monster"}
            price="90"
            cart={Cart}
          ></Item>
          <Item
            image={product6}
            stat="IN STOCK"
            prodName={isMobile ? "Heine..." : "Heineken"}
            price="70"
            cart={Cart}
          ></Item>
          <Item
            image={product7}
            stat="IN STOCK"
            prodName="Skol"
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product8}
            stat="IN STOCK"
            prodName={isMobile ? "Starb..." : "Starbucks"}
            price="150"
            cart={Cart}
          ></Item>
         <Item
            image={product4}
            stat="IN STOCK"
            prodName="Fanta"
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product3}
            stat="IN STOCK"
            prodName="Pepsi"
            price="50"
            cart={Cart}
          ></Item>
        </div>
        <div className="ProductsCategs">
          <ProdCat
            heading="Product Categories"
            category1="Beverages"
            category2="Chips & Snaks"
            category3="Health & Beauty"
            category4="Meats"
            category5="Milks & Daries"
            category6="Vegetables"
          />
        </div>
      </div>
      <div className="nextProd">
        <div className="nextProdImage">
          <img src={prodAd} alt="" />
        </div>
        <div className="ProductItems prodItems2">
          <Item
            image={product9}
            stat="IN STOCK"
            prodName="Lays"
            price="55"
            cart={Cart}
          ></Item>
          <Item
            image={product10}
            stat="IN STOCK"
            prodName="Oishi"
            price="40"
            cart={Cart}
          ></Item>
          <Item
            image={product11}
            stat="IN STOCK"
            prodName="Ruffles"
            price="60"
            cart={Cart}
          ></Item>
          <Item
            image={product12}
            stat="IN STOCK"
            prodName={isMobile ? "Cheet..." : "Cheetos"}
            price="75"
            cart={Cart}
          ></Item>
          <Item
            image={product13}
            stat="IN STOCK"
            prodName={isMobile ? "Lays..." : "Lays Classic"}
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product14}
            stat="IN STOCK"
            prodName="Doritos"
            price="70"
            cart={Cart}
          ></Item>
          <Item
            image={product13}
            stat="IN STOCK"
            prodName={isMobile ? "Lays..." : "Lays Classic"}
            price="50"
            cart={Cart}
          ></Item>
          <Item
            image={product14}
            stat="IN STOCK"
            prodName="Doritos"
            price="70"
            cart={Cart}
          ></Item>
        </div>
      </div>
      <div className="hrHeading">
        <hr />
        <p>DISCOVER</p>
      </div>
        <div>
            <div className="ProductItems prodItems3">
            <Item
                image={product15}
                stat="IN STOCK"
                prodName="Dove"
                price="290"
                cart={Cart}
            ></Item>
            <Item
                image={product16}
                stat="IN STOCK"
                prodName="Nivea"
                price="100"
                cart={Cart}
            ></Item>
            <Item
                image={product17}
                stat="IN STOCK"
                prodName={isMobile ? "Cetap..." : "Cetaphil"}
                price="350"
                cart={Cart}
            ></Item>
            <Item
                image={product18}
                stat="IN STOCK"
                prodName="Garnier"
                price="299"
                cart={Cart}
            ></Item>
            <Item
                image={product19}
                stat="IN STOCK"
                prodName="Loreal"
                price="199"
                cart={Cart}
            ></Item>
            <Item
                image={product20}
                stat="IN STOCK"
                prodName="Meat"
                price="199"
                cart={Cart}
            ></Item>
            <Item
                image={product21}
                stat="IN STOCK"
                prodName="Lamb"
                price="199"
                cart={Cart}
            ></Item>
            <Item
                image={product22}
                stat="IN STOCK"
                prodName="Pork"
                price="199"
                cart={Cart}
            ></Item>
            <Item
                image={product23}
                stat="IN STOCK"
                prodName={isMobile ? "Drum..." : "Drumstick"}
                price="150"
                cart={Cart}
            ></Item>
            <Item
                image={product24}
                stat="IN STOCK"
                prodName="Bacon"
                price="150"
                cart={Cart}
            ></Item>
            <Item
                image={product25}
                stat="IN STOCK"
                prodName="Milk"
                price="99"
                cart={Cart}
            ></Item>
            <Item
                image={product26}
                stat="IN STOCK"
                prodName="Purfiltre"
                price="250"
                cart={Cart}
            ></Item>
            <Item
                image={product27}
                stat="IN STOCK"
                prodName={isMobile ? "Magn..." : "Magnolia"}
                price="290"
                cart={Cart}
            ></Item>
            <Item
                image={product28}
                stat="IN STOCK"
                prodName="Nestle"
                price="150"
                cart={Cart}
            ></Item>
            <Item
                image={product29}
                stat="IN STOCK"
                prodName="Eden"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product30}
                stat="IN STOCK"
                prodName="Chili"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product31}
                stat="IN STOCK"
                prodName="Onion"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product32}
                stat="IN STOCK"
                prodName={isMobile ? "Caba..." : "Cabagge"}
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product33}
                stat="IN STOCK"
                prodName="Carrots"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product34}
                stat="IN STOCK"
                prodName="Tomato"
                price="50"
                cart={Cart}
            ></Item>
             <Item
                image={product31}
                stat="IN STOCK"
                prodName="Onion"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product32}
                stat="IN STOCK"
                prodName={isMobile ? "Caba..." : "Cabagge"}
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product33}
                stat="IN STOCK"
                prodName="Carrots"
                price="50"
                cart={Cart}
            ></Item>
            <Item
                image={product34}
                stat="IN STOCK"
                prodName="Tomato"
                price="50"
                cart={Cart}
            ></Item>
            </div>
        </div>
    </div>
  );
};

export default Product;
