import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom"
import "./index.scss"

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img />
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to="/categories/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/categories/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/categories/3">Unisex</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">Store Name Here</Link>
                </div>
                <div className="right">
                    <div className="center">
                        <Link className="link" to="">Homepage</Link>
                    </div>
                    <div className="center">
                        <Link className="link" to="">About</Link>
                    </div>
                    <div className="center">
                        <Link className="link" to="">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchOutlinedIcon/>
                        <AccountCircleOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;