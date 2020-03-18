describe('Test from first Selenium task', function() {
  it('Search field and News link test', async function() {
    let searchField = await element(by.id("orb-search-q"));

    async function waitForElementIsEnabled(elementName,maxTimeToWait) { //maxTimeToWait - максимальное время ожидания в мс
      let enabled;
      let timePassed = 0;
  
      while(!enabled && timePassed < maxTimeToWait) {
          enabled = await elementName.isEnabled();
          timePassed += 1000;
          await browser.sleep(1000);
      } 
  }

    async function waitForElementIsDisplayed(elementName, maxTimeToWait) {
      let displayed;
      let timePassed = 0;

      while(!displayed && timePassed < maxTimeToWait) {
          displayed = await elementName.isDisplayed();
          timePassed += 1000;
          await browser.sleep(1000);
      } 
  }

    await browser.get("https://www.bbc.com/");
    await element(by.id("orb-search-q")).sendKeys("test");
    await waitForElementIsEnabled(searchField);
    await waitForElementIsDisplayed(searchField);
    await element(by.linkText('News')).click();
  });
});
