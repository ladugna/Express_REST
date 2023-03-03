
const express =require('express')

const router= express.Router({mergeParams: true});
const {getAllIngredients,
    addNewIngredients,updateIngredients,
    getIngredientsById, deleteIngredientsById}=  require('../controller/ingredientsController');
const checkName = require('../middlewares/checkName');

router.get("/", getAllIngredients)
router.post("/",checkName, addNewIngredients)
router.put("/:ingredient_id", updateIngredients)
router.get("/:ingredient_id", getIngredientsById)
router.delete("/:ingredient_id", deleteIngredientsById)

module.exports = router;