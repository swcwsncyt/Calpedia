import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import AddMeal from './AddMeal.js';
import MealCard from './MealCard.js';

const MealContainer = () => {
  const [ mealList, setMealList ] = useState([]);
  
  useEffect(() => {
    const fetchMealList = async () => {
      var result = await axios.get('http://localhost:5000/meals');
      setMealList(result.data.meals); //temp added .meals will change server later, TODO: change it back to result.data
    }
    fetchMealList();
  }, []);

  const handleMealSubmit = (e, meal) => {
    e.preventDefault();
    meal.id = uuidv4();
    const mealListCopy = [...mealList];
    mealListCopy.push(meal);
    setMealList(mealListCopy);
  }
  
  const handleDeleteMeal = (mealIdx) => {
      var copyOfMeals = [...mealList];
      copyOfMeals.splice(mealIdx, 1);
      setMealList(copyOfMeals);      
  }

  const updateIngredientList = (mealID, updatedIngredientList) => {
    var copyOfMeals = [...mealList];
    for(let i = 0; i < copyOfMeals.length; i++) {
      if(mealID === copyOfMeals[i].id) {
        copyOfMeals[i].ingredients = updatedIngredientList;
        break;
      }
    }
    setMealList(copyOfMeals);
  }

  const style = {
    float: "left",
    width: "50%",
    height: "98vh",
    overflow: "scroll",
    paddingLeft: "10px",
    paddingRight: "10px"
  }
  return (
    <div style={{
      alignItems: "center",
      margin: "auto",
      width: "50%"
    }}>
      <AddMeal handleMealSubmit={handleMealSubmit}/>
      {mealList.length ? 
        mealList.map((meal, i) => {
          return (<MealCard key={i} meal={meal} handleDeleteMeal={() => {handleDeleteMeal(i)}} updateIngredientList={updateIngredientList}/>)
        }) :
        "there is no meal"
      }
    </div>
  );
};

export default MealContainer;
