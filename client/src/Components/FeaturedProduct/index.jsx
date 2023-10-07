import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.scss";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/categories`);
        console.log("fetch success", response.data);
        
        // Update the state with the fetched data
        setProducts(response.data); // Assuming your response data is an array
        console.log(typeof response) 
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
  
    fetchData();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get(`http://localhost:1337/api/categories`).then(
          
  //       // );
  //       const response = await axios.get(`http://localhost:1337/api/categories`).then(
  //         response => {
  //           console.log("fetch success",response.data);
  //         }
  //       );
      
  //       // Update the state with the fetched data
       
  //     } catch (err) {
  //       console.log("Error fetching data:", err);
  //     }
  //   };

  //   fetchData();
  // },[]); 

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptates quasi quo aperiam nemo minus natus quidem rerum saepe omnis
          maiores, commodi beatae eligendi neque ipsam iusto suscipit ipsa
          reiciendis?
        </p>
      </div>
      <div className="pics">
        {/* {products.map((product) => (
          <Card key={product.id} item={product} />
        ))} */}
        {products.data}
        
      </div>
    </div>
  );
};

export default FeaturedProduct;
