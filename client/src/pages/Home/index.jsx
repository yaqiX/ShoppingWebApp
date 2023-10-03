import Slider from "../../Components/Slider";
import FeaturedProduct from "../../Components/FeaturedProduct";
import DisplayBoard from "../../Components/DisplayBoard";

const Home = () => {
    return(
        <div className="home">
            <Slider/>
            <FeaturedProduct/>
            <DisplayBoard/>
        </div>
    )
}

export default Home;