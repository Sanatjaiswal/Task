import React from "react";
const Bottom=({totalPages,onPageChange})=>{
  const click=(page)=>{
    onPageChange(page);
  };
  return (
    <div className="Bottom">
      {Array.front({length:totalPages},(_,index=>(
        <button key={index} onClick={()=>click(index+1)}>
          {index+1}
        </button>
      )))}
    </div>
  );
      };
export default Bottom;