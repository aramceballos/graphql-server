const MongoLib = require('./db');

const connectDB = new MongoLib();

module.exports = {
  createCourse: async (root, { input }) => {
    let course;

    const defaults = {
      teacher: '',
      topics: '',
    };

    const newCourse = Object.assign(defaults, input);
    try {
      course = await connectDB.create('courses', input);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }
    return newCourse;
  },
  editCourse: async (root, { id, input }) => {
    let courseId;
    try {
      courseId = await connectDB.update('courses', id, input);
      input._id = courseId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  deleteCourse: async (root, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('courses', id);
    } catch (error) {
      console.error(error);
    }
    return _id;
  },
  createStudent: async (root, { input }) => {
    let studentId;

    try {
      studentId = await connectDB.create('students', input);
      input._id = studentId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  editStudent: async (root, { id, input }) => {
    let studentId;
    try {
      studentId = await connectDB.update('students', id, input);
      input._id = studentId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  deleteStudent: async (root, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('students', id);
    } catch (error) {
      console.error(error);
    }
    return _id;
  },
};
