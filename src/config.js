require('dotenv').config();

const {
  RESOURCE = 'local',
  ENVIRONMENT,
  PORT = 3000,
  HOST_NAME = 'localhost',
  FRONTEND_URI,
} = process.env;

module.exports = {
  ENVIRONMENT,
  HOST_NAME,
  PORT,
  RESOURCE,
  FRONTEND_URI,
};
