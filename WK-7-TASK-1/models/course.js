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
