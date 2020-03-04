describe('Test from first Selenium task', function() {
  it('Check browser openning, search', async function() {
    browser.ignoreSynchronization = true
    let EC = protractor.ExpectedConditions;

    await browser.get("https://www.bbc.com/");
    await element(by.id("orb-search-q")).sendKeys("test");
    browser.wait(EC.presenceOf($('#orb-search-q')), 5000);
    browser.wait(EC.visibilityOf($('#orb-search-q')), 5000);
    await element(by.linkText('News')).click();
    
  });
});
