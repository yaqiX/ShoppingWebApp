import { Link } from "react-router-dom";
import "./index.scss"

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={`http://localhost:1337${item.img1.data.attributes.url}`} alt="item" className="coverDisplay" />
                </div>
                <h2>{item.title}</h2>
                <div className="priceDisplay">
                    <h3 className="oldPrice">${item.price}</h3>
                    <h3>${item.price+20}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
