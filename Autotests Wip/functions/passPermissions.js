module.exports = async function passPermission() {
  const slct = require("../src/selectors.js");
  let android = await driver.capabilities.platformVersion;
  android = parseInt(android, 10);
  await $(slct.permissions.button).waitForDisplayed({
    timeout: 10000,
  });
  await $(slct.permissions.button).click();
  //>10 android block START
  if (android >= 11) {
    await $(slct.permissions.geo.allowWhileUsing).waitForDisplayed({
      timeout: 10000,
    });
    await $(slct.permissions.geo.allowWhileUsing).click();
    await $(slct.permissions.button).waitForDisplayed({
      timeout: 10000,
    });
    await $(slct.permissions.button).click();
    await $(
      slct.permissions.geo.settingsRadioButtons.allowAlways
    ).waitForDisplayed({
      timeout: 10000,
    });
    await $(slct.permissions.geo.settingsRadioButtons.allowAlways).click();
    await driver.back();
    await browser.pause(1000);
    let checkSecond = await $(slct.permissions.button).isExisting({
      timeout: 4000,
    });
    if (checkSecond === true) {
      await $(slct.permissions.button).click();
      await browser.pause(1000);
      let energyPermissionCheck = await $(
        slct.permissions.energyControl.allow
      ).isExisting({
        timeout: 4000,
      });
      if (energyPermissionCheck === true) {
        await $(slct.permissions.energyControl.allow).click();
      } else {
        await $(slct.permissions.overOtherApps.appChoice).waitForDisplayed({
          timeout: 20000,
        });
        await $(slct.permissions.overOtherApps.appChoice).click();
        await $(slct.permissions.overOtherApps.switcher).waitForDisplayed({
          timeout: 20000,
        });
        await $(slct.permissions.overOtherApps.switcher).click();
        await driver.back();
        await driver.back();
      }
      let checkThird = await $(slct.permissions.button).isExisting({
        timeout: 4000,
      });
      if (checkThird === true) {
        await $(slct.permissions.button).click();
        await $(slct.permissions.energyControl.allow).waitForDisplayed({
          timeout: 20000,
        });
        await $(slct.permissions.energyControl.allow).click();
      }
    }
    //>10 android block END
  } else {
    let checkVersion = await $(slct.permissions.geo.allowAlways).isExisting({
      timeout: 4000,
    });
    //android 10
    if (checkVersion === true) {
      await $(slct.permissions.geo.allowAlways).click();
    } else {
      //android <10
      await $(slct.permissions.geo.allow).click();
    }
    await browser.pause(1000);
    let checkSecond = await $(slct.permissions.button).isExisting({
      timeout: 4000,
    });
    //overApp
    if (checkSecond === true) {
      await $(slct.permissions.button).click();
      await browser.pause(1000);
      let energyPermissionCheck = await $(
        slct.permissions.energyControl.allow
      ).isExisting({
        timeout: 4000,
      });
      if (energyPermissionCheck === true) {
        await $(slct.permissions.energyControl.allow).click();
      } else {
        await $(slct.permissions.overOtherApps.switcher).click();
        await browser.back();
      }
    }
    await browser.pause(1000);
    let checkThird = await $(slct.permissions.button).isExisting({
      timeout: 4000,
    });
    //energy
    if (checkThird === true) {
      await $(slct.permissions.button).click();
      await $(slct.permissions.energyControl.allow).click();
    }
  }
};
