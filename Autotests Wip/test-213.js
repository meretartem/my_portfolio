const assert = require("assert");

const slct = require("../src/selectors.js");
const pass = require("../tools/passStartScreen.js");
const scroll = require("../tools/ScrollFync.js");
const logIn = slct.loginpage.login.signru;
let numberphone = "";
describe("Test(213)", function () {
  before("Log in", async function () {
    browser.reset();
    await $(logIn).waitForDisplayed({ timeout: 15000 });
    await $(logIn).click();
    await pass.StartScreen();
    await $("[text=Выбрать компанию]").click();
    await $("android.widget.Button").click(); //MainTabs, back 	android.widget.Button
  });
  it("Открыть сайдбар, выйти, выбрать компанию", async function () {
    await scroll.Sidebar.Open();
    await $("[text=Сменить компанию]").click();
    await $("[text=Сменить курьера]").click();
  });
  it("Очистить", async function () {
    await $("android.widget.EditText").clearValue();
  });
  it("Проверка неверного логина", async function () {
    /*
    Курьер с таким логином не найден
    Курьер с логином "+7911090hfhfhfhfhf" не найден в компании "Тестовое яблоко". Проверьте правильность ввода логина курьера.
    ВВЕСТИ ЛОГИН
    */
    let testInput = "TestInputForThe213Test";
    await $("android.widget.EditText").addValue(testInput);
    await $("[text=ОК]").click();
    let OR1 = "Курьер с таким логином не найден";
    let OR2 = `Курьер с логином "${testInput}" не найден в компании "Тестовое яблоко". Проверьте правильность ввода логина курьера.`;
    let OR3 = "ВВЕСТИ ЛОГИН";
    let FZ1 = await $$("android.widget.TextView")[0].getText();
    let FZ2 = await $$("android.widget.TextView")[1].getText();
    let FZ3 = await $(`[text=${OR3}]`).waitForExist({ timeout: 5000 });
    assert.strictEqual(OR1, FZ1);
    assert.strictEqual(OR2, FZ2);
    assert.strictEqual(FZ3, true);
  });
  it("Технический шаг: ввести логин", async function () {
    await $("[text=ВВЕСТИ ЛОГИН]").click();
  });
  it("Ввести валидный номер", async function () {
    await $("android.widget.EditText").clearValue();

    await $("android.widget.EditText").addValue(
      slct.loginpage.login.phonearsamsung
    );
    await $("[text=ОК]").click();
    await $("android.widget.Button").click();
    await scroll.Sidebar.Open();
    let OR1 = [];
    OR1 = await $$(`[text=${slct.loginpage.login.phonearsamsung}]`);
    //так как номера 3 логин, курьер, его номер, то берем массив и проверяем, что всё ок
    assert(OR1.length, 3);
  });
});
