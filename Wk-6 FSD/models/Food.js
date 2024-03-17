<<<<<<< HEAD
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: String,
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      proteins: Number,
      fats: {
        total: Number,
        saturated: Number,
        unsaturated: Number,
        trans: Number,
      },
      carbohydrates: Number,
      sugar: Number,
    },
    micronutrients: {
      vitamins: {
        A: Number,
        C: Number,
        D: Number,
      },
      minerals: {
        iron: Number,
        calcium: Number,
        potassium: Number,
      },
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
=======
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: String,
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      proteins: Number,
      fats: {
        total: Number,
        saturated: Number,
        unsaturated: Number,
        trans: Number,
      },
      carbohydrates: Number,
      sugar: Number,
    },
    micronutrients: {
      vitamins: {
        A: Number,
        C: Number,
        D: Number,
      },
      minerals: {
        iron: Number,
        calcium: Number,
        potassium: Number,
      },
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
