let ingredientsModel = require('../model/mealsModel');

function getMealIndexById(meal_id){
    return ingredientsModel.findIndex(meal=>meal.id===+meal_id)
}

module.exports.getAllIngredients= async(req, res, next)=>{
    try {

        const {meal_id}=req.params;
        const mealIndex= getMealIndexById(meal_id)
        
  res.json(ingredientsModel[mealIndex].ingredients);
        
    } catch (error) {
        next(error)
        
    }

}

module.exports.addNewIngredients= async(req, res, next)=>{
    try {
        const {meal_id}=req.params;
        const mealIndex= getMealIndexById(meal_id)
        const newIngredients= req.body;
        ingredientsModel[mealIndex].ingredients= [...ingredientsModel[mealIndex].ingredients, newIngredients]
       // res.json({success:true, data:mealsModel})
       res.json(ingredientsModel);

        
    } catch (error) {
        next(error)
        
    }

}

module.exports.updateIngredients= async(req, res, next)=>{
    try {
        const {meal_id, ingredients_id}=req.params;
        const mealIndex= getMealIndexById(meal_id)
        const updatedIngredients= req.body;

       ingredientsModel[mealIndex].ingredients= ingredientsModel[mealIndex].ingredients.map(ingredients=>{
            if(ingredients.id===+ingredients_id)
            return updatedIngredients;
            //return [...mealsModel, ...updatedMeal]
            else
            return ingredients;
        })
        
    } catch (error) {
        next(error)
        
    }
    res.json(ingredientsModel);
}

module.exports.getIngredientsById= async(req, res, next)=>{
    try {
        const {meal_id, ingredients_id}=req.params;
        const mealIndex= getMealIndexById(meal_id)
       
        ingredientsModel[mealIndex].ingredients= ingredientsModel[mealIndex].ingredients.filter(ingredients=>{
            ingredients.id===+ingredients_id
        })

        res.json(ingredientsModel);
    } catch (error) {
        next(error)
        
    }

}

module.exports.deleteIngredientsById= async(req, res, next)=>{
    try {
        const {meal_id, ingredients_id}=req.params;
        const mealIndex= getMealIndexById(meal_id)
    
       ingredientsModel[mealIndex].ingredients= ingredientsModel[mealIndex].ingredients.filter(ingredients=>{
            ingredients.id!==+ingredients_id
        })
        ///mealsModel=mealsModel.find(meal=>meal.id===+meal_id)
        res.json(ingredientsModel);
    } catch (error) {
        next(error)
        
    }

}