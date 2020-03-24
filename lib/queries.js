const ObjectId = require('mongodb').ObjectID;
const connectDB = require('./db');

module.exports = {
  courses: async () => {
    let db;
    let courses = [];

    try {
      db = await connectDB();
      courses = await db
        .collection('courses')
        .find()
        .toArray();
    } catch (error) {
      console.error(error);
    }

    return courses;
  },
  course: async (root, { id }) => {
    let db;
    let course;

    try {
      db = await connectDB();
      course = await db.collection('courses').findOne({ _id: ObjectId(id) });
    } catch (error) {
      console.error(error);
    }
    return course;
  },
};
