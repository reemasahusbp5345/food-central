import { CDN_URL } from "../Utils/constants";
import deleteIcon from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { removeItem } from "../Redux/cartSlice";

const CartItem = ({ menu }) => {
    const dispatch=useDispatch();
    const handleDeleteItem =(data)=>{
        dispatch(removeItem(data));
    }
  return (
    <div className="flex justify-between border-b-2 border-slate-300 p-3 m-3 hover:bg-slate-100 cursor-pointer">
      <div className="w-2/4 text-xl font-bold">
        {menu?.card?.info?.name} - ₹{" "}
        {menu?.card?.info?.price
          ? menu?.card?.info?.price / 100
          : menu?.card?.info?.defaultPrice / 100}
      </div>
      <div className="w-1/4">
        {menu?.card?.info?.imageId ? (
          <img
            className="w-24 h-20 rounded-lg object-cover"
            src={CDN_URL + menu?.card?.info?.imageId}
          />
        ) : (
          <></>
        )}
      </div>
      <div onClick={()=>handleDeleteItem(menu)}>
        <img className="w-6 h-6 mr-5" src={deleteIcon} alt="deleteIcon"/>
      </div>
    </div>
  );
};

export default CartItem;
