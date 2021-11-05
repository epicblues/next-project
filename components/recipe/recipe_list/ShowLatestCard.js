import React, {useState, useEffect } from "react";
import ShowRecipeCard from "./ShowRecipeCard";

function ShowLatestCard(props) {
    let [_rcpData ,setRcpData] = useState(props.rcpData)

    return (
        <div className="row">
            {
                // TODO: 비동기 처리로 교체해야 되는지 고려
                _rcpData.map(function (n, i) {
                    return (
                        <ShowRecipeCard rcpData={_rcpData[i]} i={i} key={i} />
                    )   
                })
            }
        </div>
    );
}

export default ShowLatestCard;