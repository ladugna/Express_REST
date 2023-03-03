
const express= require('express');

const {getAllMeals, addNewMeal, updateMeal, getMealById, deleteMealById, getAllIngredients,addNewIngredient,updateIngredient,
    getIngredientById, deleteIngredientById }= require('../controller/mealController')
const checkName = require('../middlewares/checkName')
const router= express.Router();


router.get("/", getAllMeals)
router.post("/", checkName, addNewMeal)
router.put("/:meal_id", updateMeal)
router.get("/:meal_id", getMealById)
router.delete("/:meal_id", deleteMealById)


router.get("/:meal_id/ingredients", getAllIngredients)
router.post("/:meal_id/ingredients", checkName, addNewIngredient)
router.put("/:meal_id/ingredients/:ingredient_id", updateIngredient)
router.get("/:meal_id/ingredients/:ingredient_id", getIngredientById)
router.delete("/:meal_id/ingredients/:ingredient_id", deleteIngredientById)


module.exports= router;