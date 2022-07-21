const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const router = require('./routes');

const { PORT, HOST_NAME, FRONTEND_URI } = require('./config.js');

const CORS_WHITELIST = [FRONTEND_URI];
const app = express();

const corsOption = {
  credentials: true,
  origin: function checkCorsList(origin, callback) {
    if (CORS_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


app.use(requestLogger);

app.use(router);

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});
