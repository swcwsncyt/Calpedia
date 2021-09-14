import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddIngredient = ({addIngredientToMeal}) => {
  const [category, setCategory] = useState("Category");
  const [ingredient, setIngredient] = useState("Ingredient");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState(0);
  const [ingredientsList, setIngredientsList] = useState({category:[]});

  useEffect(() => {
    const fetchIngredientsData = async () => {
      const result = await axios.get('http://localhost:5000/ingredientsList')
      setIngredientsList(result.data);
    }
    fetchIngredientsData();
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  }
  
  const handleAddIngredient = (e) => {
    e.preventDefault();
    addIngredientToMeal(ingredient, quantity, unit, category, quantity * ingredientsList[category][ingredient][unit]);
  }

  return (
    <form onSubmit={handleAddIngredient}>
      Select category to add Ingredient: <br />
      <select onChange={handleCategoryChange} className="ingredient-category">
        <option>Category</option>
        {ingredientsList.category.map((cat) => {
            return <option>{cat}</option>
        })}
      </select>
      {category !== "Category" ? 
      <>
        <select onChange={handleIngredientChange} id="ingredient">
          <option>Ingredient</option>
          {ingredientsList[category].foodList.map((food) => {
            return <option>{food}</option>
          })}
        </select>
      </> : <></>}
      {ingredient !== "Ingredient" ?
      <>
        <input onChange={handleQuantityChange} style={{width: "30px"}} placeholder="unit" required/>
        <select onChange={handleUnitChange} required>
          <option value="">Unit</option>
          {ingredientsList[category][ingredient].units.map((unit) => {
            return <option>{unit}</option>
          })}
        </select>
        <button style={{float: "right"}}>Add Ingredient</button> 
      </>: <></>}
    </form>
  )
}

export default AddIngredient;