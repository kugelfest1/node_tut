var censor = require("censorify32767");
console.log(censor.getCensorWords());
console.log(censor.censor("some very sad, bad and mad text"));
censor.addCensorWord("gloomy");
console.log(censor.getCensorWords());
console.log(censor.censor("A very gloomy day"));