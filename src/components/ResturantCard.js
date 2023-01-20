import { IMG_CDN } from "../content";



const ResturantCard=({
    name,cuisines,cloudinaryImageId,minDeliveryTime,
})=>{
    // const {name,cuisines,cloudinaryImageId,minDeliveryTime}=data.data;
    return (
        <div className="card">
        <img src={IMG_CDN+cloudinaryImageId} alt="image"/>
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{minDeliveryTime} minutes star</h4>
        </div>
    )
}

export default ResturantCard;