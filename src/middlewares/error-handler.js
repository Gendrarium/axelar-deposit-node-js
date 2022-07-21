const { isCelebrateError } = require('celebrate');

module.exports = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const { details } = err;

    const result = details.get('body').details[0].message;

    res.status(400).send({ message: result });
  } else {
    const { statusCode = 500, message } = err;

    res.status(statusCode).send({
      message: statusCode === 500 ? 'An error occurred on the server' : message,
    });
  }

  next();
};
