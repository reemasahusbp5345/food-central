import {  useState } from "react";
import { useParams } from "react-router-dom";
 
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu.js";
import MenuCategory from "./MenuCategory.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuItem, resDetails] = useRestaurantMenu(id);
  const [showMenuList,setShowMenuList]=useState(1);
  return menuItem?.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="w-1/2 m-auto text-center">
        <h1 className="font-extrabold text-2xl">{resDetails?.name}</h1>
        <h3 className="text-sm font-medium text-gray-900">
          {resDetails?.avgRating} - {resDetails?.costForTwoMessage}
        </h3>
        <div>
          {menuItem?.map((category,idx) => 
            <MenuCategory
              category={category?.card?.card}
              key={category?.card?.card?.title || idx}
              showMenuList={idx===showMenuList && true}
              setShowMenuList={()=>setShowMenuList(idx)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
