import { Link } from "react-router-dom";
import "./index.scss"

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img} alt="item" className="coverDisplay" />
                    <img src={item.img2} alt="item" className="hoverDisplay" />
                </div>
                <h2>{item.title}</h2>
                <div className="priceDisplay">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
