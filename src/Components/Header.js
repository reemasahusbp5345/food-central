import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
 

const Header = () => {
  const cartItems=useSelector(store=>store.cart.cartItems);
  const onlineStatus=useOnlineStatus();
   
  const handleLogout=()=>{
    
  }
  return (
    <div className="flex justify-between items-center bg-cyan-50 p-3 shadow-2xl">
      <div>
        <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
      </div>
      <div className="font-bold text-center text-blue-800">
        {/* <h1>{user?.email && <span>Hi, </span>} {user?.email}</h1> */}
      </div>
      <div className="">
        <ul className="flex text-base font-medium">
          <li className="p-2 hover:bg-slate-700 hover:text-white rounded-md"><Link to="/">Home</Link></li>
          <li className="p-2 hover:bg-slate-700 hover:text-white rounded-md"><Link to="/about">About Us</Link></li>
          <li className="p-2 hover:bg-slate-700 hover:text-white rounded-md"><Link to="/contact">Contact Us</Link></li>
          <li className="p-2 flex hover:bg-slate-700 hover:text-white rounded-md">
            <Link to="/cart">
            <img className="w-8 h-8 rounded-full" src={cart} alt="cart" />
            {cartItems?.length>0 &&
            <span className="text-white font-bold absolute ml-5 -mt-11 rounded-full bg-red-500 px-2">{cartItems?.length}</span>}
            </Link>
          </li>
          <li className="p-2 hover:bg-slate-700 hover:text-white rounded-md">
            {/* { active? <span onClick={handleLogout}>Logout</span>:
            <Link to="/login">Login </Link>
            } */}
            {onlineStatus?"🟢":"🔴"}
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
