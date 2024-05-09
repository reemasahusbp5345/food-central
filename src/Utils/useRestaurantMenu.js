import {useState, useEffect} from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu=(id)=>{
    const [menuItem, setMenuItem] = useState([]);
    const [resDetails, setResDetails] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const menu = await fetch(MENU_URL + id);
        const menuJson = await menu.json();
        const menuData =
          menuJson?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        setMenuItem(menuData);
        setResDetails(menuJson?.data?.cards?.[2]?.card?.card?.info);
      };

      return [menuItem,resDetails];
}

export default useRestaurantMenu;