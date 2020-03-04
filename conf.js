exports.config = {
  directConnect: false,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test1.spec.js'],
  capabilities: {
    browserName: 'chrome',
  }
}