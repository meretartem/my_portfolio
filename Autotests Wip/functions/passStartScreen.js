module.exports = async function passStartScreen() {
  const slct = require("../src/selectors.js");
  await $(slct.onboarding.button).click();
  await $(slct.onboarding.button).click();
  await $(slct.onboarding.button).click();
};
