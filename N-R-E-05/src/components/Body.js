import ResturantCart from "./ResturantCart";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    //Hook
    const [listOfResturant, setlistOfResturant] = useState (resList);

    return (<div className="search">
        <div className="filter">
            <button className="filter-btn"
                onClick={ () => {
                    const Filterlist = listOfResturant.filter (
                        (res) => res.info.avgRating > 4.4
                    );
                    setlistOfResturant(Filterlist);
                 } }
            >
            Top Rated Resturants</button>
        </div>
        <div className="res-cart">
             {listOfResturant.map((info, index) => (
                <ResturantCart key={index} resData={info} />
             ) )}
        </div>
    </div>
)}

export default Body;