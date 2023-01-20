import React, { useState } from "react";
import {resturant_list} from "../content"
import ResturantCard from "./ResturantCard";

function Body() {

    const[searchInput ,setSearchInput]=useState();
    const [searchClicked,setsearchClicked]=useState("false");



    return (
   <>
    <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="search"
        value={searchInput}
        onChange={(e)=>{
            setSearchInput(e.target.value);
        }}
        />
                <h1>{searchClicked}</h1>

           <button className="search-btn"
           onClick={()=>{
            setsearchClicked("true");
           }}
           
           >search</button>
    </div>
  
 


    <div className="resurantlist">

        {resturant_list.map((object)=>{
            return (          
                  <ResturantCard {...object.data} key={object.data.id}/>
            )

        })}


</div>  
   </>  );
}

export default Body;