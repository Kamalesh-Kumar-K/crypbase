import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandle = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={`/`}>
      <img src={logo} alt="logo" className='logo'/>
      </Link>
      
      <ul>
        <Link to={`/`}>
        <li>Home</li>
        </Link>

      </ul>
      <div className="nav-right">
        <select onChange={currencyHandle}>
          <option value='inr'>INR</option>
          <option value='eur'>EUR</option>
          <option value='usd'>USD</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;