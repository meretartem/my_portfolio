const tokenFile = require("../scripts/token.json");
const token = tokenFile.token;
const replace = require("replace-in-file");
const scriptsToChange = [
  "./scripts/Generation598.json",
  "./scripts/RoutesGen.json",
];
//заменяет все {\"} на {'}
const options = {
  files: scriptsToChange,
  from: /[\\\\]["]/g,
  to: "'",
};
//заменяет все токены на верные
const options2 = {
  files: scriptsToChange,
  from: /('token', ')[a-zA-Z0-9_]+('\);)/,
  to: `'token', '${token}');`,
};

describe("Change-token", function () {
  before("Should change", async function () {
    try {
      const results = await replace(options);
      console.log("Replacement results:", results);
    } catch (error) {
      console.error("Error occurred:", error);
    }
    try {
      const results = await replace(options2);
      console.log("Replacement results:", results);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });
  it("should w8", async function () {
    await browser.pause(3000);
    await browser.reset();
  });
});
