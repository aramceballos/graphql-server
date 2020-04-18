const MongoLib = require('./db');
const errorHandler = require('./errorHandler');

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
      errorHandler(error);
    }
    return newCourse;
  },
  editCourse: async (_, { id, input }) => {
    let courseId;
    try {
      courseId = await connectDB.update('courses', id, input);
      input._id = courseId;
    } catch (error) {
      errorHandler(error);
    }
    return input;
  },
  deleteCourse: async (_, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('courses', id);
    } catch (error) {
      errorHandler(error);
    }
    return _id;
  },
  createPerson: async (_, { input }) => {
    let studentId;

    try {
      studentId = await connectDB.create('students', input);
      input._id = studentId;
    } catch (error) {
      errorHandler(error);
    }
    return input;
  },
  editPerson: async (_, { id, input }) => {
    let studentId;
    try {
      studentId = await connectDB.update('students', id, input);
      input._id = studentId;
    } catch (error) {
      errorHandler(error);
    }
    return input;
  },
  addToCourse: async (_, { courseID, personID }) => {
    let course;
    let student;

    try {
      course = await connectDB.get('courses', courseID);
      student = await connectDB.get('students', personID);

      if (!course || !student)
        throw new Error('The course or student does not exists');

      await connectDB.addTo('courses', courseID, personID);
    } catch (error) {
      errorHandler(error);
    }

    return course;
  },
  deletePerson: async (_, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('students', id);
    } catch (error) {
      errorHandler(error);
    }
    return _id;
  },
};
