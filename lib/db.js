const { MongoClient } = require('mongodb');

const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_HOST = config.dbHost;
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

let connection;

const connectDB = async () => {
  if (connection) return connection;

  let client;

  try {
    client = await MongoClient.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection = client.db(DB_NAME, (error) => {
      console.error('Could not connect', error);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
  }

  return connection;
};

module.exports = connectDB;
