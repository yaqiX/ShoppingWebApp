import "./index.scss";
import { useSelector } from "react-redux";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const Cart = () =>{

    const cartData = useSelector(state=>state.cart.products)
    const totalPrice = () =>{
        let total = 0;
        cartData.forEach((item) => (total += item.quantity * item.price))
        return total.toFixed(2)
    }
    return(
        <div className="cart">
            <h1>Added Products</h1>
            {cartData.map(item=>(
                <div className="cartItem" key={item.id}>
                    <img src={item.img}/>
                    <div className="itemInfo">
                        <h2>{item.title}</h2>
                        <div className="itemPrice">
                            {item.quantity} X ${item.price}
                            <span className="delete"><ClearOutlinedIcon /></span>
                        </div>
                        
                    </div>
                </div>
            ))}
            <div className="ttl">
                <span>Total </span>
                <span>${totalPrice()}</span>
            </div>
            <button className="checkOut"><ShoppingCartCheckoutOutlinedIcon/>Proceed</button>
        </div>
    )
}

export default Cart;