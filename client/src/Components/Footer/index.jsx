import "./Footer.scss"


import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
//change or return

const Footer = () => {
   
  return (
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi
              molestiae laborum nam, earum accusamus inventore quasi libero
              impedit iste nobis similique amet culpa ratione unde error?
              Doloremque, possimus excepturi?
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quae eligendi et id? Velit non dolore impedit, eligendi cum odio a
              magnam. Ipsa accusantium in laudantium, facere cum iusto eveniet?
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">Lamastore</span>
            <span className="copyright">© Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="right">
            {/* <img src="/img/payment.png" alt="" /> */}
          </div>
        </div>
      </div>
    );
  };
  
export default Footer;
  