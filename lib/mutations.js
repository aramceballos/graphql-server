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
  editCourse: async (_, { id, input }) => {
    let courseId;
    try {
      courseId = await connectDB.update('courses', id, input);
      input._id = courseId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  deleteCourse: async (_, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('courses', id);
    } catch (error) {
      console.error(error);
    }
    return _id;
  },
  createStudent: async (_, { input }) => {
    let studentId;

    try {
      studentId = await connectDB.create('students', input);
      input._id = studentId;
    } catch (error) {
      console.error(error);
    }
    return input;
  },
  editStudent: async (_, { id, input }) => {
    let studentId;
    try {
      studentId = await connectDB.update('students', id, input);
      input._id = studentId;
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }

    return course;
  },
  deleteStudent: async (_, { id }) => {
    let _id;

    try {
      _id = await connectDB.delete('students', id);
    } catch (error) {
      console.error(error);
    }
    return _id;
  },
};
