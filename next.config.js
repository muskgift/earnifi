module.exports = {
  images: {
    domains: [
      "storage.googleapis.com",
      "emojipedia-us.s3.dualstack.us-west-1.amazonaws.com",
    ],
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    INFURA_RPC_MAINNET: process.env.INFURA_RPC_MAINNET,
  },
};
