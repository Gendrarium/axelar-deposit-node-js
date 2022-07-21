const { celebrate, Joi } = require('celebrate');

const validateSendToken = celebrate({
  body: Joi.object().keys({
    sourceChain: Joi.string().required().messages({
      'any.required': 'Field "sourceChain" is required',
    }),
    destinationChain: Joi.string().required().messages({
      'any.required': 'Field "destinationChain" is required',
    }),
    destinationAddress: Joi.string().required().messages({
      'any.required': 'Field "destinationAddress" is required',
    }),
    symbol: Joi.string().required().messages({
      'any.required': 'Field "symbol" is required',
    }),
  }),
});

module.exports = {
  validateSendToken,
};
