describe('Test from first Selenium task', function() {
  it('Search field and News link test', async function() {
    let searchField = await element(by.id("orb-search-q"));

    async function waitForElementIsEnabled(elementName) {
      let enabled;
  
      while(!enabled) {
          await browser.sleep(1000);
          enabled = await elementName.isEnabled();
      } 
  }

    async function waitForElementIsDisplayed(elementName) {
      let displayed;

      while(!displayed) {
          await browser.sleep(1000);
          displayed = await elementName.isDisplayed();
      } 
  }

    await browser.get("https://www.bbc.com/");
    await element(by.id("orb-search-q")).sendKeys("test");
    await waitForElementIsEnabled(searchField);
    await waitForElementIsDisplayed(searchField);
    await element(by.linkText('News')).click();
  });
});
