import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MealAddIngredient = ({handleAddMealIngredient}) => {
  const [ingredientsList, setIngredientsList] = useState({category: []});
  const [selectedList, setSelectedList] = useState({category: "Category", ingredient: "Ingredient", unit: "Unit", quantity: 0})

  const fetchIngredientList = async () => {
    const result = await axios.get('http://localhost:5000/ingredientsList')
    setIngredientsList(result.data.ingredientsList)
  }

  useEffect(() => {
    fetchIngredientList();
  }, [])

  const handleSelectOnChange = (e) => {
    var copyOfSelectList = {...selectedList};
    if(e.target.id === "ingredient-category") {
      copyOfSelectList.category = e.target.value;
      copyOfSelectList.ingredient = "Ingredient";
      copyOfSelectList.unit = "Unit"
      copyOfSelectList.quantity = 0;
    }
    else if(e.target.id === "ingredient-ingredient") {
      copyOfSelectList.ingredient = e.target.value;
      copyOfSelectList.unit = "Unit"
      copyOfSelectList.quantity = 0;
    }
    else if(e.target.id === "ingredient-unit") copyOfSelectList.unit = e.target.value;
    else copyOfSelectList.quantity = e.target.value;

    console.log(copyOfSelectList)
    setSelectedList(copyOfSelectList);
  }

  const handleAddIngredient = () => {
    const calories = ingredientsList[selectedList.category][selectedList.ingredient][selectedList.unit] * selectedList.quantity
    const ingredientDetail =         {
      "unit": selectedList.unit,
      "quantity": selectedList.quantity,
      "category": selectedList.category,
      "description": selectedList.ingredient,
      "calories": calories
    }
    handleAddMealIngredient(ingredientDetail)
  }

  return(
    <>
      {/* category dropdown */}
      <select id="ingredient-category" onChange={handleSelectOnChange}>
        <option>Category</option>
        {ingredientsList.category.map(category => <option>{category}</option>)}
      </select>
      {/* ingredient dropdown */}
      {selectedList.category !== "Category"? 
        <select value={selectedList.ingredient} id="ingredient-ingredient" onChange={handleSelectOnChange}>
          <option>Ingredient</option>
          {ingredientsList[selectedList.category].foodList.map(food=><option>{food}</option>)}
        </select>: <></>
      }
      {/* unit dropdown and quantity input */}
      {selectedList.ingredient !== "Ingredient"? 
        <>
          <input onChange={handleSelectOnChange}/>
          <select value={selectedList.unit} id="ingredient-unit" onChange={handleSelectOnChange}>
            <option>Unit</option>
            {ingredientsList[selectedList.category][selectedList.ingredient].units.map(unit=><option>{unit}</option>)}
          </select>
        </>
        : <></>}
        {/* show add ingredient button */}
        {(selectedList.unit !== "Unit" && selectedList.quantity)? 
          <button onClick={handleAddIngredient} className="btn btn-sm btn-danger" style={{float: "right"}}>Add Ingredient</button>
          : <></>}
    </>
  )
}

export default MealAddIngredient;