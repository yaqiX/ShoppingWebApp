import "./index.scss";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const Cart = () =>{

    const cartData = [
        {
            id: 1, 
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" ,
            img2:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" ,
            title: "Long Sleeve Graphic T-shirt", 
            isNew:true, 
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            title: "Casual Denim Jeans",
            isNew: false,
            oldPrice: 29,
            price: 22
        }]

    return(
        <div className="cart">
            <h1>Added Products</h1>
            {cartData.map(item=>(
                <div className="cartItem" key={item.id}>
                    <img src={item.img}/>
                    <div className="itemInfo">
                        <h2>{item.title}</h2>
                        <div className="itemPrice">
                            ${item.price}
                            <span className="delete"><ClearOutlinedIcon /></span>
                        </div>
                        
                    </div>
                </div>
            ))}
            <div className="ttl">
                <span>Total </span>
                <span>$</span>
            </div>
            <button className="checkOut"><ShoppingCartCheckoutOutlinedIcon/>Proceed</button>
        </div>
    )
}

export default Cart;