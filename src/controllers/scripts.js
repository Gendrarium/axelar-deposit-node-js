const sendTokenContract = require('../scripts/sendToken');
const BadRequestError = require('../errors/bad-request-error');

const sendToken = async (req, res, next) => {
  const { sourceChain, destinationChain, destinationAddress, symbol } =
    req.body;
  try {
    const depositAddress = await sendTokenContract({
      sourceChain,
      destinationChain,
      destinationAddress,
      symbol,
    });
    res.status(200).send({ depositAddress });
  } catch(e) {
    next(new BadRequestError(e));
  }
};

module.exports = {
  sendToken,
};
