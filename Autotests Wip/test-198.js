const assert = require("assert");
const txt = require("../src/txt-expected-results.js");
const slct = require("../src/selectors.js");

describe("Test-198", function () {
  before("Log in", async function () {
    browser.reset();
    await $(slct.loginpage.signIn).waitForDisplayed({ timeout: 20000 });
    await $(slct.loginpage.signIn).click();
  });
  it("Should be 1st special screen", async function () {
    await $(slct.onboarding.button).waitForDisplayed({ timeout: 20000 });
    const txtScreen1_1 = await $(slct.onboarding.txtTitle).getText();
    const txtScreen1_2 = await $(slct.onboarding.txtMessage).getText();
    assert.strictEqual(txt.onboarding.firstTXT.first, txtScreen1_1);
    assert.strictEqual(txt.onboarding.firstTXT.second, txtScreen1_2);
  });

  it("Should not react on click", async function () {
    browser.touchAction({
      action: "tap",
      x: 300,
      y: 300,
    });

    const status = await $(slct.onboarding.image).waitForDisplayed({
      timeout: 6000,
    });
    assert.strictEqual(status, true);
    await $(slct.onboarding.button).click();
  });
  it("Should have 2nd special screen", async function () {
    await browser.pause(1500);
    await $(slct.onboarding.button).waitForDisplayed({ timeout: 20000 });
    const txtScreen2_1 = await $(slct.onboarding.txtTitle).getText();
    const txtScreen2_2 = await $(slct.onboarding.txtMessage).getText();
    assert.strictEqual(txt.onboarding.secondTXT.first, txtScreen2_1);
    assert.strictEqual(txt.onboarding.secondTXT.second, txtScreen2_2);
  });
  it("Should save my progress before BG", async function () {
    await browser.background(5);
    const status = await $(slct.onboarding.image).waitForDisplayed({
      timeout: 6000,
    });
    assert.strictEqual(status, true);
  });
  it("Should save my progress before relaunch", async function () {
    await browser.closeApp();
    await browser.launchApp();
    await browser.pause(1500);
    await $(slct.onboarding.image).waitForDisplayed({ timeout: 20000 });
    const txtScreen2_1 = await $(slct.onboarding.txtTitle).getText();
    const txtScreen2_2 = await $(slct.onboarding.txtMessage).getText();
    assert.strictEqual(txt.onboarding.secondTXT.first, txtScreen2_1);
    assert.strictEqual(txt.onboarding.secondTXT.second, txtScreen2_2);
  });
  it("Should have 3rd special screen", async function () {
    await $(slct.onboarding.button).click();
    await browser.pause(1500);
    await $(slct.onboarding.button).waitForDisplayed({ timeout: 20000 });
    const txtScreen3_1 = await $(slct.onboarding.txtTitle).getText();
    const txtScreen3_2 = await $(slct.onboarding.txtMessage).getText();
    assert.strictEqual(txt.onboarding.thirdTXT.first, txtScreen3_1);
    assert.strictEqual(txt.onboarding.thirdTXT.second, txtScreen3_2);
  });
  it("Should work after onboarding", async function () {
    await $(slct.onboarding.button).click();
    await $(slct.chooseCompany.card).waitForDisplayed({ timeout: 20000 });
    await $$(slct.chooseCompany.buttonContainer)[1].click(); //

    await $(slct.android.button).waitForDisplayed({ timeout: 20000 });
    await $(slct.android.button).click();
    const status = await $(slct.header.mapAndList).waitForDisplayed({
      timeout: 20000,
    });
    assert.strictEqual(status, true);
  });
  it("Should not have onboarding after relaunch", async function () {
    await browser.closeApp();
    await browser.launchApp();
    await $(slct.android.button).waitForDisplayed({ timeout: 20000 });
    await $(slct.android.button).click();
    const status = await $(slct.header.mapAndList).waitForDisplayed({
      timeout: 20000,
    });
    assert.strictEqual(status, true);
  });
});
