import React from "react";
const card=({cardData,onRemove})=>{
  const handleRemove=()=>{
    onRemove(cardData.id);
  };
   return(
    <div className="cards">
<span>{cardData.content}</span>
<button onClick={handleRemove}>X</button>
</div>
   );
};

export default card;

  