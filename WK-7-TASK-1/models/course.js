<<<<<<< HEAD
// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: String,
  dueDate: String,
  taskName: String,
  additionalDetails: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
=======
// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: String,
  dueDate: String,
  taskName: String,
  additionalDetails: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
>>>>>>> b732338569d054f91e9973d8fedcc7e63f0f41f4
