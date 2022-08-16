const assert = require("assert");
const slct = require("/selectors.js");
const bNext = "[text=Next]";
const bNext1 = "[text=Got it]";
const bNext2 = "[text=Let's go]";
const txtSel = "android.widget.TextView";
const number = slct.loginpage.login.phonearsamsung;
const list = "[text=List]";
describe("Test(198)", function () {
  afterEach("Pause", function () {
    browser.pause(1500);
  });

  before("Log in", function () {
    browser.reset();
    $(number).waitForDisplayed({ timeout: 6000 });
    $(number).click();
    $(bNext).click();
    $(bNext1).click();
    $(bNext2).click();
  });
  it("Allow", () => {
    $("[text=Allow]").waitForDisplayed({ timeout: 7000 });
    $("[text=Allow]").click();
    $("[text=Allow all the time]").waitForDisplayed({ timeout: 7000 });
    $("[text=Allow all the time]").click();
  });
  it("Should go to sidebar", () => {
    $$("android.view.ViewGroup")[0].click();
  });

  it("Should click", () => {
    $("[text=About]").click();
  });
  it("should has fields", () => {
    const sVersion = 'new UiSelector().textContains("Version")';
    const sBuild = 'new UiSelector().textContains("Build")';
    const sFrom = 'new UiSelector().textContains("from")';
    const sYandexCopy = 'new UiSelector().textContains("©")';
    const version = $(`android=${sVersion}`).isDisplayed();
    const build = $(`android=${sBuild}`).isDisplayed();
    const form = $(`android=${sFrom}`).isDisplayed();
    const la = $("[text=License agreement]").isDisplayed();
    const copyRight = $(`android=${sYandexCopy}`).isDisplayed();
    const q = $(`android=${sVersion}`).getText();
    const w = $(`android=${sBuild}`).getText();
    const e = $(`android=${sFrom}`).getText();
    const image = $("image/YaQLogo1.png").isDisplayed();
    assert.strictEqual(version, true);
    assert.strictEqual(build, true);
    assert.strictEqual(form, true);
    assert.strictEqual(la, true);
    assert.strictEqual(copyRight, true);
    assert.strictEqual(image, true);
    console.log(q);
    console.log(w);
    console.log(e);
  });
});
