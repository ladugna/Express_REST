let mealsModel = require('../model/mealsModel');

module.exports.getAllMeals= async(req, res, next)=>{
    try {
  res.json(mealsModel);
        
    } catch (error) {
        next(error)
        
    }

}

module.exports.addNewMeal= async(req, res, next)=>{
    try {
        
        const newMeal= req.body;
        mealsModel= [...mealsModel, newMeal]
       // res.json({success:true, data:mealsModel})
       res.json(mealsModel);

        
    } catch (error) {
        next(error)
        
    }

}

module.exports.updateMeal= async(req, res, next)=>{
    try {
        const {meal_id}= req.params;
        const updatedMeal= req.body;

        mealsModel= mealsModel.map(meal=>{
            if(meal.id===meal_id)
            return updatedMeal;
            //return [...mealsModel, ...updatedMeal]
            else
            return meal;
        })
        
    } catch (error) {
        next(error)
        
    }
    res.json(mealsModel);
}

module.exports.getMealById= async(req, res, next)=>{
    try {
        const {meal_id}= req.params;
        const meal= mealsModel.find(meal=>{
            meal.id===meal_id
        })

        res.json(meal); 
    } catch (error) {
        next(error)
        
    }

}

module.exports.deleteMealById= async(req, res, next)=>{
    try {
        const {meal_id}= req.params;
        // mealsModel= mealsModel.filter(meal=>{
        //     meal.id!==meal_id
        // })
        mealsModel=mealsModel.find(meal=>meal.id!==meal_id)
        res.json(mealsModel);
    } catch (error) {
        next(error)
        
    }

}



