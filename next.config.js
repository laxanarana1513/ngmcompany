const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {

      images: {
        unoptimized: true,
      },
      env: {
        emailFrom,
        emailFromPass,
        emailTo,
      },
      reactStrictMode: true,
    };
  }

  return {
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
  };
};
