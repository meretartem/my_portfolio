const assert = require("assert");
const slct = require("../src/selectors.js");
const pass = require("../tools/passStartScreen.js");
const scroll = require("../tools/ScrollFync.js");
const getDevice = require("../tools/getDeviceInfo.js");
const txt = require("../src/txt-expected-results.js");

let deviceObj = {};

describe("Test-213", function () {
  before("Login and onboarding", async function () {
    //определяем модель телефона и берем объект с его данными
    deviceObj = await getDevice.getDeviceInfo();
    driver.reset();
    await $(slct.loginpage.signIn).waitForDisplayed({ timeout: 20000 });
    await $(slct.loginpage.signIn).click();
    await pass();
    await $(slct.chooseCompany.card).waitForDisplayed({ timeout: 20000 });
    await $$(slct.chooseCompany.buttonContainer)[1].click();
    await $(slct.android.button).waitForDisplayed({ timeout: 20000 });
    await $(slct.android.button).click(); //MainTabs, back 	android.widget.Button
  });
  it("Open sidebar, change courier", async function () {
    await scroll.Sidebar.Open();
    //Костыль пока нет id
    await $(slct.sidebar.courierInfo.changeCompany).waitForDisplayed({
      timeout: 20000,
    });
    await $(slct.sidebar.courierInfo.changeCompany).click();
    //await $(slct.sidebar.changeCompany).click();
    await $(slct.chooseCompany.buttonContainer).waitForDisplayed({
      timeout: 20000,
    });
    await $(slct.chooseCompany.changeCourier).click();
  });
  it("Clear text field", async function () {
    await $(slct.android.editTxt).clearValue();
  });
  it("Invalid login validation", async function () {
    const testInput = "TestInputForThe213Test";
    await $(slct.android.editTxt).addValue(testInput);
    await $(slct.changeCourierPanel.buttonOk).click();
    const expectedResult1 = txt.courierChoiceField.courierNotFound;
    const expectedResult2 =
      txt.courierChoiceField.courierNotFoundName(testInput);
    const factResult3 = await $(
      slct.changeCourierPanel.wrongNamePopUp.warningTitle
    ).waitForExist({
      timeout: 5000,
    });
    const factResult1 = await $(
      slct.changeCourierPanel.wrongNamePopUp.warningTitle
    ).getText();
    const factResult2 = await $(
      slct.changeCourierPanel.wrongNamePopUp.warningMessage
    ).getText();
    assert.strictEqual(expectedResult1, factResult1);
    assert.strictEqual(expectedResult2, factResult2);
    assert.strictEqual(factResult3, true);
  });
  it("Click on EnterLogin", async function () {
    await $(slct.changeCourierPanel.wrongNamePopUp.retryButton).click();
  });
  it("Enter valid login", async function () {
    await $(slct.android.editTxt).clearValue();
    await $(slct.android.editTxt).addValue(deviceObj.phoneNumber);
    await $(slct.changeCourierPanel.buttonOk).click();
    await $(slct.android.button).click();
    await scroll.Sidebar.Open();
    const accountNumber = await $(
      slct.sidebar.courierInfo.accountPhone
    ).getText();
    const courierName = await $(
      slct.sidebar.courierInfo.courierLogin
    ).getText();
    const courierPhone = await $(
      slct.sidebar.courierInfo.courierPhone
    ).getText();

    //так как номера 3 логин, курьер, его номер, то берем массив и проверяем, что всё ок
    assert.strictEqual(accountNumber, deviceObj.phoneNumber);
    assert.strictEqual(courierName, deviceObj.phoneNumber);
    assert.strictEqual(courierPhone, deviceObj.phoneNumber);
  });
});
