
const assert = require("assert");

describe('Test(196)', function () {
    
    it('Should show logo',()=> {
        
        const image = $('image/YaLogoStart.png').waitForExist({timeout: 5000, interval: 150});  
        assert.strictEqual(image,true);
    });
    
})