const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Create a new food item
router.post('/', foodController.createFood);

// Get all food items
router.get('/', foodController.getAllFood);

// Get a specific food item by ID
router.get('/:id', foodController.getFoodById);

// Update a food item
router.put('/:id', foodController.updateFood);

// Delete a food item
router.delete('/:id', foodController.deleteFood);

module.exports = router;
