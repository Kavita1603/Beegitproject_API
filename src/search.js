import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
// import data from "./data";

const getFilteredItems = (search, items) => {
    if (!search) {
      return items;
    }
    return items.filter((song) => song.name.includes(search));
  };

export default function SearchBar() {

    const [search, setSearch] = useState("");

    // const { tracks } = data;
    // const { items } = tracks;

    const filteredItems = getFilteredItems(search);
    
    return(
        
        <div className="search">
            <div className="searchInputs">
           
               <input type="text" placeholder="Search Repositories Here" 
                    onChange={(e) => setSearch(e.target.value)}/> 
               <div className="SearchIcon"><SearchIcon /></div>
               <ul>
                  {filteredItems.map((value) => (
                  <a href={value.href} target="_blank" rel="noreferrer" >{value.name}</a>
                  ))}
               </ul>
               
             </div>          
            
{/*              
             <div className="dataResult"></div> */}
         </div>
    );
}