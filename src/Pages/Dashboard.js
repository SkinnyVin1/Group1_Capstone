import "../Pages/Dashboard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [prodName, setProdName] = useState("");
  const [categ, setCateg] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [dash, setDDash] = useState("");

  const adProduct = (e) => {
    e.preventDefault();
    let getProd = new FormData();
    getProd.append("prodName", prodName);
    getProd.append("categ", categ);
    getProd.append("price", price);
    getProd.append("qty", qty);

    axios({
      method: "POST",
      url: "http://localhost/grocerease_database/addProd.php",
      data: getProd,
    }).then(function (response) {
      alert("Product Successfully Added");
      //   window.location.href = "/Login";
    });
  };

  useEffect(() => {
    const url = "http://localhost/grocerease_database/addProd.php";
    axios.get(url).then((response) => {
      setDDash(response.data);
    });
  }, []);

  return (
    <div className="dashBody">
      <h1>Admin's Product Dashboard</h1>
      <form action="">
        <input
          type="text"
          name="Prodname"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
          id="pName"
          placeholder="Insert Product Name"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="Category"
          value={categ}
          onChange={(e) => setCateg(e.target.value)}
          id="pCat"
          placeholder="Insert Product Category"
          autoComplete="off"
          required
        />
        <input
          type="number"
          name="ProdPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="pPrice"
          placeholder="Insert Product Price"
          autoComplete="off"
          required
        />
        <input
          type="number"
          name="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          id="pQty"
          placeholder="Insert Product Quantity"
          autoComplete="off"
          required
        />
      </form>
      <button className="addProd" onClick={adProduct}>
        Add Product
      </button>

      <ul>
        {Array.isArray(dash) &&
          dash.map((val) => {
            return (
              <li key={val.product_id}>
                <input
                  type="text"
                  defaultValue={val.product_name}
                  id={"product_name_" + val.product_id}
                />
                <input
                  type="text"
                  defaultValue={val.product_category_id}
                  id={"product_category_id_" + val.product_id}
                />
                <input
                  type="text"
                  defaultValue={val.product_category_id}
                  id={"product_price_" + val.product_id}
                />
                <input
                  type="text"
                  defaultValue={val.product_quantity}
                  id={"product_quantity_" + val.product_id}
                />
                <button>DELETE</button>
                <button>UPDATE</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Dashboard;
