import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./index.scss"
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';



const Product = () => {

    const id = useParams().id
    const [imgURL, setImgURL] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(1);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const response = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories.][$eq]=${Women}`);
            const response = await axios.get(`http://localhost:1337/api/products${id}?populate=*`);
        
            console.log('Fetch success'); // Log success message
          
            console.log('Fetched category data:', response.data); // Log fetched data
            setData(response.data);
          } catch (error) {
            setError(error);
            console.error('Error fetching data:', error);
          }
        }}
    )

    // const {data, loading, error} =useFetch(`http://localhost:1337/api/products/${id}?populate=*`)
    // // `http://localhost:1337${item.img1.data.attributes.url}`
    return(
        <div className="productPage">
            <div className="picDisplay">
                <div className="picThumbnail">
                    {/* <img src={imgs[0]} onClick={e=>setImgIndex(0)}/>
                     */}
                     <img src={`http://localhost:1337${data?.attributes?.img1?.data?.attributes?.url}`} onClick={e=>setImgURL(`http://localhost:1337${data?.attributes?.img1?.data?.attributes?.url}`)}/>
                     <img src={`http://localhost:1337${data?.attributes?.img2?.data?.attributes?.url}`} onClick={e=>setImgURL(`http://localhost:1337${data?.attributes?.img2?.data?.attributes?.url}`)}/>
                    {/* <img src={imgs[1]} onClick={e=>setImgIndex(1)}/> */}
                </div>
                <div className="displayImg">
                    {/* <img src={imgs[imgIndex]}/> */}
                    <img src={imgURL}/>
                </div>
            </div>
            <div className="productDisplay">
                <h2>{data.attributes.title}</h2>
                <span>${data.attributes.price}</span>
                <p>{data.attributes.description}</p>
               
                <div className="addToCart">
                    <button 
                        onClick={e=>setQuantityToAdd(quantityToAdd-1)}
                        // disable when reach 1
                        >-</button>
                    {quantityToAdd}
                    <button onClick={e=>setQuantityToAdd(quantityToAdd+1)}>+</button>
                    {/* <label>How many you want?</label> */}
                    <button className="cartButton">
                        <AddShoppingCartOutlinedIcon/>Add to cart
                    </button>
                    <div className="addFav">
                        <button><FavoriteBorderOutlinedIcon/></button>Add to Favorite
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;