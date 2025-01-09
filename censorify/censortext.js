var censorWords = ["sad", "bad", "mad" ];
var customCensorWords = [];
function censor(inStr) {
  for( idx in censorWords ) {
    inStr = inStr.replace(censorWords[idx], "***");
  }
  return inStr;
}
function addCensorWord(word) {
  customCensorWords.push(word);
}
function getCensorWords() {
  return censorWords.concat(customCensorWords);
}
exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWords = getCensorWords;
