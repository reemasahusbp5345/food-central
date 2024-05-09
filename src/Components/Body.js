import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTLIST_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";
import withVegLabel from "./withVegLabel.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus=useOnlineStatus();
  const VegRestaurntCard=withVegLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTLIST_URL);
    let json = await data.json();
    setListOfRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if(!onlineStatus){
    return <h1>OOOPs!!! It seems your internet connection is lost!</h1>
  }
  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex p-4">
        <div className="search-box">
          <input
          className="w-72 p-2 border-solid border-2 border-slate-600 rounded-lg"
            type="text"
            placeholder="search your favourites restaurants"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
          className="bg-cyan-200 px-4 rounded-lg mx-2 py-2 text-base font-medium"
            onClick={() => {
              let searchedRestaurant = listOfRestaurant?.filter((elem) => {
                if (
                  elem?.info?.name
                    ?.toLowerCase()
                    ?.includes(search?.toLowerCase())
                ) {
                  return elem;
                } else if (search === "") {
                  return setSearch(listOfRestaurant);
                }
              });
              setFilteredRestaurant(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
          className="bg-cyan-200 px-4 rounded-lg mx-2 py-2 text-base font-medium"
            onClick={() => {
              let filteredRestaurants = filteredRestaurant?.filter((elem) => {
                return elem?.info?.avgRating > 4;
              });
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div  className="flex flex-wrap ml-8">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}>
              {restaurant?.info?.veg?<VegRestaurntCard resData={restaurant}/>: <RestaurantCard resData={restaurant}/>}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
