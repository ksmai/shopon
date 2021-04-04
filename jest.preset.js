const path = require('path');
const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\\?.*)?$': path.resolve(
      __dirname,
      '__mocks__',
      'fileMock.js'
    ),
  },
};
