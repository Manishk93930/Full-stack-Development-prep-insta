<<<<<<< HEAD
const Food = require('../models/Food');

// Create a new food item
exports.createFood = async (req, res) => {
  try {
    const { name, foodGroup, description } = req.body;
    if (!name || !foodGroup || !description) {
      return res.status(400).json({ error: 'Name, foodGroup, and description are required fields' });
    }

    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all food items
exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific food item by ID
exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a food item
exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a food item
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
=======
const Food = require('../models/Food');

// Create a new food item
exports.createFood = async (req, res) => {
  try {
    const { name, foodGroup, description } = req.body;
    if (!name || !foodGroup || !description) {
      return res.status(400).json({ error: 'Name, foodGroup, and description are required fields' });
    }

    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all food items
exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific food item by ID
exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a food item
exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a food item
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
