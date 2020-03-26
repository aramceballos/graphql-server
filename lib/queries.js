const MongoLib = require('./db');

const connectDB = new MongoLib();

module.exports = {
  courses: async () => {
    let courses = [];

    try {
      courses = await connectDB.getAll('courses');
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  course: async (root, { id }) => {
    let course;

    try {
      course = await connectDB.get('courses', id);
    } catch (error) {
      console.error(error);
    }
    return course;
  },
  students: async () => {
    let students = [];

    try {
      students = await connectDB.getAll('students');
    } catch (error) {
      console.error(error);
    }

    return students;
  },
  student: async (root, { id }) => {
    let student;

    try {
      student = await connectDB.get('students', id);
    } catch (error) {
      console.error(error);
    }
    return student;
  },
};
