const baseConfig = require('./karma.base.js');

module.exports = (config) => {
  config.set(Object.assign({}, baseConfig, {
    browsers: ['Chrome'],
    reporters: ['kjhtml'],
    frameworks: ['jasmine', 'sinon-chai'],
    singleRun: false
  }));
};
