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
        const response = await axios.get('http://localhost:1337/api/products?populate=*&[filters][isNew][$eq]=true');
    
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
        <div className="featuredProduct">
          <div className="top">
            <h1>New Season</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptates quasi quo aperiam nemo minus natus quidem rerum saepe omnis
              maiores, commodi beatae eligendi neque ipsam iusto suscipit ipsa
              reiciendis?
            </p>
          </div>
          <div className="pics">
            {prodData.map(prod => (
                <Card item={prod.attributes} key={prod.id}/>
            ))}
          </div>
        </div>
    )
};

export default CategoryList;