const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/meals', (req, res) => {
  res.send({"meals": [
    {
      "id": "verySpecialID1",
      "name": "Meal 1",
      "type": "meal",
      "time": "13:00",
      "ingredients": [
        {
          "unit": "oz",
          "quantity": 3,
          "category": "meats",
          "description": "chicken thigh",
          "calories": 500
        },
        {
          "unit": "gram",
          "quantity": 100,
          "category": "meats",
          "description": "chicken breast",
          "calories": 100
        },
        {
          "unit": "cup",
          "quantity": 1,
          "category": "fruits",
          "description": "apple",
          "calories": 100
        },
        {
          "unit": "cup",
          "quantity": 1,
          "category": "vegetables",
          "description": "brussel sprouts",
          "calories": 38
        }
      ]
    },
    {
      "id": "verySpecialID3",
      "name": "Meal 20",
      "time": "19:00",
      "type": "meal",
      "ingredients": [
        {
          "unit": "oz",
          "quantity": 10,
          "category": "meats",
          "description": "rib eye steak",
          "calories": 700
        },
        {
          "unit": "cup",
          "quantity": 2,
          "category": "vegetables",
          "description": "broccoli",
          "calories": 70
        },
        {
          "unit": "cup",
          "quantity": 2,
          "category": "carbohydrates",
          "description": "curly fries",
          "calories": 320
        },
        {
          "unit": "cup",
          "quantity": 1,
          "category": "carbohydrates",
          "description": "rice",
          "calories": 206
        },
        {
          "unit": "oz",
          "quantity": 5,
          "category": "meats",
          "description": "chichen wing",
          "calories": 250
        }
      ]
    }
  ]})
})

app.get('/ingredientsList', (req, res) => {
  res.send({"ingredientsList": {
    "category": ["carbohydrates", "fruits", "meats", "vegetables"],
    "carbohydrates": {
      "foodList": ["rice", "curly fries"],
      "rice": {
        "units": ["cup", "gram"],
        "cup": 206,
        "gram": 1.3
      },
      "curly fries": {
        "units": ["cup"],
        "cup": 130
      }
    },
    "meats": {
      "foodList": ["chicken thigh", "chicken breast", "chicken wing"],
      "chicken thigh": {
        "units": ["oz", "gram"],
        "oz": 50,
        "gram": 1.76
      },
      "chicken breast": {
        "units": ["oz", "gram"],
        "oz": 30,
        "gram": 1.1
      },
      "chicken wing":  {
        "units": ["oz"],
        "oz": 50
      }
    },
    "fruits": {
      "foodList": ["apple", "strawberry", "pineapple"],
      "apple": {
        "units": ["cup"],
        "cup": 100
      },
      "strawberry": {
        "units": ["cup"],
        "cup": 50
      },
      "pineapple": {
        "units": ["cup"],
        "cup": 80
      }

    },
    "vegetables": {
      "foodList": ["brussel sprout", "broccoli", "spinach", "cabbage", "carrot"],
      "brussel sprout": {
        "units": ["cup"],
        "cup": 38
      },
      "broccoli": {
        "units": ["cup"],
        "cup": 31
      },
      "spinach": {
        "units": ["cup"],
        "cup": 7
      },
      "cabbage": {
        "units": ["cup"],
        "cup": 17
      },
      "carrot": {
        "units": ["cup"],
        "cup": 45
      }
    }
  }})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})