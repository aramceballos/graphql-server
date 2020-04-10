const errorHandler = (error) => {
  console.error(error);
  throw new Error('Server operation failed');
};

module.exports = errorHandler;
