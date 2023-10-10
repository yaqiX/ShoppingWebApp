import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProduct = (category) => {
  const [categories, setCategories] = useState([]);
  const {data, loading, error} = useFetch(`http://localhost:1337/api/categories?populate=*[filters][categoryTitle][$eq]=${category}`)
  console.log(data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:1337/api/products?populate=*');
  //      
  //       // http://localhost:5173/[object%20Object] const img1.attribute.url
  //       console.log('Fetch success'); // Log success message
      
  //       console.log('Fetched category data:', response.data.data); // Log fetched data
  //       setCategories(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        {/* {categories.length > 0 ? (
          categories.map((item) => (
            <Card key={item.id} item={item.attributes}/>
          ))
        ) : (
          <p>Loading categories...</p>
        )} */}
          {
          data.map((item) => (
            <Card key={item.id} item={item.attributes}/>
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProduct;