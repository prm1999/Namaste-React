import React from "react";
import {Resturant_list} from "../content"
import ResturantCard from "./ResturantCard";

function Body() {
    return (
<div className="resurantlist">

    {Resturant_list.map((object)=>{
        return <ResturantCard {...object.data} key={object.data.id}/>
    })}


</div>    );
}

export default Body;