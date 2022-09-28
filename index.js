const wilderInfo = require("./information.js");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi! my name is ${wilderInfo.name} and I'm from the ${wilderInfo.campus} campus.`
}));