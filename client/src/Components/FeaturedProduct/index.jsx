import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.scss"

const FeaturedProduct = () => {

    const [products, setProducts] = useState([])

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_TOKEN;
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await axios.get(apiUrl + "/categories",{
                    Authorization: "bearer " + apiKey,
                });
                console.log("data",data);
            } catch(err){
                console.log("errordata",err);
            }
        };
        fetchData();
    },[])


    return (
        <div className="featuredProduct">
            <div className="top">
                <h1>Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates quasi quo aperiam nemo minus natus quidem rerum saepe omnis maiores, commodi beatae eligendi neque ipsam iusto suscipit ipsa reiciendis?</p>
            </div>
            <div className="pics">
                {picData.map((product) => (
                    <Card key={product.id} item={product}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct;