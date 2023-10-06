import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


import {Link} from "react-router-dom"
import Cart from "../Cart"

import "./index.scss"

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = () => {

    const [open, setOpen] = useState(false);
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
                    <div className="right">
                        <Link className="link" to="">Homepage</Link>
                    </div>
                    <div className="right">
                        <Link className="link" to="">About</Link>
                    </div>
                    <div className="right">
                        <Link className="link" to="">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchOutlinedIcon/>
                        <AccountCircleOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        {/* <div className="cartIcon">
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div> */}
                        <IconButton aria-label="cart" className='cartIcon' onClick={()=>setOpen(!open)}>
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartOutlinedIcon/>
                            </StyledBadge>
                        </IconButton>
                    </div>
                </div>
            </div>
                {open && <Cart/>}
        </div>
    )
}

export default Navbar;