/* eslint-disable operator-linebreak */
const { ObjectId } = require('mongodb');
const MongoLib = require('./db');

const connectDB = new MongoLib();

module.exports = {
  Course: {
    people: async ({ people }) => {
      let peopleData;
      let ids;

      try {
        ids = people ? people.map((id) => ObjectId(id)) : [];
        peopleData =
          ids.length > 0
            ? connectDB.getAll('students', { _id: { $in: ids } })
            : [];
        console.log(peopleData);
      } catch (error) {
        console.error(error);
      }
      return peopleData;
    },
  },
};
