const { AxelarAssetTransfer } = require('@axelar-network/axelarjs-sdk');

const { RESOURCE } = require('../config');

const sendToken = async ({
  sourceChain,
  destinationChain,
  destinationAddress,
  symbol,
}) => {
  if (!RESOURCE) {
    throw new Error('Enter correct resource name (testnet or mainnet)');
  } else if (RESOURCE === 'testnet' || RESOURCE === 'mainnet') {

    const sdk = new AxelarAssetTransfer({
      environment: RESOURCE,
      auth: 'local',
    });
    try {
      const depositAddress = await sdk.getDepositAddress(
        sourceChain,
        destinationChain,
        destinationAddress,
        symbol
      );
      return depositAddress;
    } catch (e) {
      if (e.fullMessage) {
        throw e.fullMessage;
      }
      throw e;
    }
  } else {
    throw new Error('Enter correct resource name (testnet or mainnet)');
  }
};

module.exports = sendToken;
