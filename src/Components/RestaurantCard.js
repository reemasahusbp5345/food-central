import { CDN_URL } from "../Utils/constants";

const RestaurantCard=(props)=>{
    const {name,avgRating, cuisines, costForTwo,cloudinaryImageId}=props?.resData?.info;
    const {deliveryTime}=props?.resData?.info?.sla;
   return (<div className="w-56 h-96 bg-slate-100 hover:bg-slate-300 m-4 p-4 rounded-lg shadow-xl">
        <img className="w-52 h-52 rounded-lg object-cover" alt="res-img" src={`${CDN_URL}${cloudinaryImageId}`}/>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h3>
        <h4 className="text-sm font-medium text-gray-900">{avgRating} rating</h4>
        <h4 className="text-sm font-medium text-gray-900">{deliveryTime} Mins</h4>
        <h4 className="text-sm font-medium text-gray-900">{cuisines.join(", ")}</h4>
        <h4 className="text-sm font-medium text-gray-900">{costForTwo}</h4>
    </div>
)}

export default RestaurantCard;