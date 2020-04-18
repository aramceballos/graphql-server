const MongoLib = require('./db');
const errorHandler = require('./errorHandler');

const connectDB = new MongoLib();

module.exports = {
  courses: async () => {
    let courses = [];

    try {
      courses = await connectDB.getAll('courses');
    } catch (error) {
      errorHandler(error);
    }

    return courses;
  },
  course: async (root, { id }) => {
    let course;

    try {
      course = await connectDB.get('courses', id);
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },
  people: async () => {
    let students = [];

    try {
      students = await connectDB.getAll('students');
    } catch (error) {
      errorHandler(error);
    }

    return students;
  },
  person: async (root, { id }) => {
    let student;

    try {
      student = await connectDB.get('students', id);
    } catch (error) {
      errorHandler(error);
    }
    return student;
  },
};
