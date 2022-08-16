const assert = require("assert");
const { set } = require("lodash");
import slct from './selectors.js';
const bNext = '[text=Next]';
const bNext1 = '[text=Got it]';
const bNext2 = '[text=Let\'s go]';
const txtSel = 'android.widget.TextView';
const number = slct.loginpage.login.phonearsamsung;
const txtCheck1_1 = 'Using your phone while driving is more dangerous than driving drunk';
const txtCheck1_2 = 'Please don\'t use the app while driving.';
const txtCheck2_1 = 'The route has already been calculated. Now you just have to call the customers';
const txtCheck2_2 = 'Yandex collects data about real trips and builds the best route so you can get there as quick as possible.';
const txtCheck3_1 = 'You don\'t have to hit the "Delivered" button anymore';
const txtCheck3_2 = 'Orders are automatically marked as delivered when you arrive at the point';
const list = '[text=List]';
describe('Test(198)', function () {
    
    afterEach('Pause', function () {
        browser.pause(1500)
    })
    before('Log in', async function () {
        browser.reset();
        await $(number).waitForDisplayed({ timeout: 6000 })
        await $(number).click();
    })
    it('should have 1st special screen', async function () {
        await $(bNext).waitForDisplayed({timeout: 6000})
        const txtScreen1_1 = await $$(txtSel)[0].getText();
        const txtScreen1_2 = await $$(txtSel)[1].getText();
        assert.strictEqual(txtCheck1_1, txtScreen1_1);
        assert.strictEqual(txtCheck1_2, txtScreen1_2);  
    });
   
    it('should dont react to click', async function () {
        await $$('android.view.ViewGroup')[0].click();
        const status = await $(bNext).waitForDisplayed({timeout: 6000})
        assert.strictEqual(status,true);
    });
    it('should have 2nd special screen', async function () {
        await $(bNext).click();
        await $(bNext1).waitForDisplayed({timeout: 6000})
        const txtScreen2_1 = await $$(txtSel)[0].getText();
        const txtScreen2_2 = await $$(txtSel)[1].getText();
        assert.strictEqual(txtCheck2_1, txtScreen2_1);
        assert.strictEqual(txtCheck2_2, txtScreen2_2);  
    });
    it('should be ok after BG', async function () {
        await browser.background(5);
        const status = await $(bNext1).waitForDisplayed({timeout: 6000})
        assert.strictEqual(status,true);
    });
    it('should be ok after relaunch', async function () {
        await browser.closeApp();
        await browser.launchApp();
        await $(bNext1).waitForDisplayed({timeout: 10000});
        const txtScreen2_1 = await $$(txtSel)[0].getText();
        const txtScreen2_2 = await $$(txtSel)[1].getText();
        assert.strictEqual(txtCheck2_1, txtScreen2_1);
        assert.strictEqual(txtCheck2_2, txtScreen2_2);  
    });
    it('should have 3rd special screen', async function () {
        await $(bNext1).click();
        await $(bNext2).waitForDisplayed({timeout: 6000})
        const txtScreen3_1 = await $$(txtSel)[0].getText();
        const txtScreen3_2 = await $$(txtSel)[1].getText();
        assert.strictEqual(txtCheck3_1, txtScreen3_1);
        assert.strictEqual(txtCheck3_2, txtScreen3_2);  
    });
    it('should be OK after special screen', async function () {
        await $(bNext2).click();
        await  $('[text=Allow]').waitForDisplayed({ timeout: 10000});
        await $('[text=Allow]').click();
        await $('[text=Allow all the time]').waitForDisplayed({ timeout: 10000});
        await $('[text=Allow all the time]').click();
        const status =  await $(list).waitForDisplayed({ timeout: 20000});
        assert.strictEqual(status,true);   
    });
    it('should be ok after relaunch 2', async function () {
        await browser.closeApp();
        await browser.launchApp();
        const status =  await $(list).waitForDisplayed({ timeout: 20000});
        assert.strictEqual(status,true)  
    });
});