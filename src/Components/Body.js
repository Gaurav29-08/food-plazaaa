import RestaurtantCard,{withPromtedLable} from "./RestaurtantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants,  setListOfRestaurants ] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText , setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.13231&lng=75.847858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

const onlineStatus = useOnlineStatus();
if(onlineStatus===false) 
return(
<h1>
  looks like you are offline please check your internet connection
  </h1>
);
  
  return  listOfRestaurants.length ===0 ?  <Shimmer />  : (

    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
    
          <input type="text" className="border border-solid border-black" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)

          }}
          />


          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
            const filteredRestaurants=
            listOfRestaurants.filter((res)=>
res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );
            setFilteredRestaurant(filteredRestaurants);
          }}>search</button>
        </div>

<div className="search m-4 p-4 flex items-center">
<button
        className="px-4 py-1 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

           
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

</div> 
       
    
  </div>
      <div className="flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
       
          
          <RestaurtantCard key={restaurant.info.id} resData={restaurant} />
        
         
        ))}
      </div>
    </div>
  );
};

export default Body;
