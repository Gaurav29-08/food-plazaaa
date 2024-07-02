import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

  const [resInfo,setResInfo] = useState(null);
  const {resId}  = useParams();
 

  useEffect(()=>{
    fetchMenu();

  },[]);

  const fetchMenu = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.13231&lng=75.847858&restaurantId=75445&catalog_qa=undefined&query=Biryani&submitAction=ENTER");

    const json = await data.json();

    console.log(json);
    setResInfo(json.data)
  };

  

  if(resInfo === null) return <Shimmer />;

  const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;
console.log(itemCards);

  return (
    <div className="menu">
      {/* <h1>{resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.itemCards[1]?.card?.info?.name}</h1> */}
      <h1>{resInfo.cards[0].card.card.text}</h1>
      <h2>Menu</h2>
      <ul>
       {itemCards.map((item)=>(
        <li key={item.card.info.id}
        >{item.card.info.name} - {"Rs."} {item.card.info.defaultPrice/100}</li>
       ))}


      </ul>
    </div>
  )
}

export default RestaurantMenu;

