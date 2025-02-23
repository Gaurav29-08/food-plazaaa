import { CDN_URL } from "../utils/constants";
const RestaurtantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    cuisines,
    name,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] overflow-y-auto rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}  </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div> 
  );
};



 export const withPromtedLable = (RestaurtantCard)=>{
  return ()=>{
    return (
      <div>
       <label>Promted</label>
       <RestaurtantCard /> 
      </div>
    )
  }
}



export default RestaurtantCard;