import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.scss";

const CategoryList = ({type}) => {
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/products?populate=*');
        // http://localhost:1337/uploads/alexandra_iva_a_PIN_2_ITQ_2_M_unsplash_ea576d9e69.jpg
       
        // http://localhost:5173/[object%20Object] const img1.attribute.url
        console.log('Fetch success'); // Log success message
      
        console.log('Fetched category data:', response.data.data); // Log fetched data
        setProdData(response.data.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }


    return(
        <div className="list">
            {prodData.map(prod => (
                <Card item={prod} key={prod.id}/>
            ))}
        </div>
    )
};

export default CategoryList;