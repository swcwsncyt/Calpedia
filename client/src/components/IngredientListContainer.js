import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientSearch from './IngredientSearch.js';

const IngredientListContainer = () => {
  const [ingredientsList, setIngredientsList] = useState([]);

  const fetchIngredientList = async () => {
    const result = await axios.get('http://localhost:5000/ingredientsList')
    console.log(result.data.ingredientsList)
    setIngredientsList(result.data.ingredientsList)
  }

  useEffect(() => {
    fetchIngredientList();
  }, [])

  return (
    <div style={{
      float: "left",
      width: "50%",
      height: "98vh",
      overflow: "scroll", 
      paddingLeft: "10px", 
      paddingRight: "10px"
    }}>
      <IngredientSearch />
      <pre>
        {JSON.stringify(ingredientsList, null, 2)}
      </pre>
    </div>
  )
}

export default IngredientListContainer;