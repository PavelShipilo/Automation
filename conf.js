exports.config = {
  directConnect: false,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['search-field-plus-news-link-test.spec.js'],
  capabilities: {
    browserName: 'chrome',
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
}

