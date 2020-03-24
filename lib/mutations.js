const connectDB = require('./db');

module.exports = {
  course: async (root, { input }) => {
    let db;
    let course;

    const defaults = {
      teacher: '',
      topics: '',
    };

    const newCourse = Object.assign(defaults, input);
    try {
      db = await connectDB();
      course = await db.collection('courses').insertOne(input);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }
    return newCourse;
  },
};
