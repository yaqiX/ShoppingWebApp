import { useEffect, useState, useParams } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.scss";
// http://localhost:5173/categories/1

const CategoryList = ({categoryID}) => {
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("list",listId);
      try {
        // const response = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories.][$eq]=${Women}`);
        // const response = await axios.get(`http://localhost:1337/api/products/${listId}?populate=*`);
        const response = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories][id][$eq]=${categoryID}`);
        console.log('Fetch success'); // Log success message
        console.log('Fetched category data:', response.data); // Log fetched data
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
                <Card item={prod.attributes} key={prod.id}/>
            ))}
        </div>
    )
};

export default CategoryList;