import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./index.scss"

import { useState } from "react";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';



const Product = () => {

    // const imgs = [
    //     "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    //     "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"

    // ];
    const id = useParams().id
    const [imgURL, setImgURL] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    const {data, loading, error} =useFetch(`http://localhost:1337/api/products/1?populate=*`)
    // `http://localhost:1337${item.img1.data.attributes.url}`
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