import React, { useState } from "react";

function IngredientSearch() {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
    console.log(query)
  }

  return (
    <div id="search">
      <button style={{float: "right"}} >Search</button>
      <input style={{float: "right"}} onChange={onChange}/>
    </div>
  );
}



export default IngredientSearch;
