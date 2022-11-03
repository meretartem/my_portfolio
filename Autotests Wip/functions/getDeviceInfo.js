module.exports = {
  //функция определяет телефон и выдает объект со всей информаций по телефону
  getDeviceInfo: async function getDeviceInfo() {
    const data = require("../src/data-devices.js");
    const currentDeviceUdid = await driver.capabilities.udid;
    const deviceObj = data.find(
      (item) => item.udidNumber === currentDeviceUdid
    );
    return deviceObj;
  },
};
