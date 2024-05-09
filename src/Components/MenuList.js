import { CDN_URL} from "../Utils/constants";
import nonveg from "../assets/nonveg.png";
import veg from "../assets/veg.png";
import { useDispatch } from "react-redux";
import { addItems } from "../Redux/cartSlice";

const MenuList = ({ menu }) => {
  const dispatch=useDispatch();
  const handleAddItem=(data)=>{
    dispatch(addItems(data));
  }
  return (
    <div className="border-b-2 border-slate-300 p-3 m-3 hover:bg-slate-100 cursor-pointer">
      <div className="flex justify-between ">
        <div className="w-2/3 text-left">
          <div className="w-6">
            {menu?.card?.info?.itemAttribute?.vegClassifier?.toLowerCase() ==
            "veg" ? (
              <img src={veg} alt="veg" />
            ) : (
              <img src={nonveg} alt="nonveg" />
            )}
          </div>
          <h4 className="font-bold">{menu?.card?.info?.name}</h4>
          <p className="font-semibold">₹ {menu?.card?.info?.price? menu?.card?.info?.price / 100 : menu?.card?.info?.defaultPrice/100}</p>
          <p className="text-sm truncate">{menu?.card?.info?.description}</p>
        </div>
        <div className="">
          <div>
            {menu?.card?.info?.imageId ? (
              <img
                className="w-28 h-28 rounded-lg object-cover"
                src={CDN_URL + menu?.card?.info?.imageId}
                alt="dish"
              />
            ) : (
              <></>
            )}
          </div>
          <button className="bg-cyan-200 px-4 rounded-lg m-2 py-2 text-base font-medium" onClick={()=>handleAddItem(menu)}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
