
 module.exports = function check(str, bracketsConfig) {
  let strConf = bracketsConfig.map(item => item.join(''))
  while (strConf.length) {
    let iterator = 0;
    strConf.forEach(item => {
      if (str.indexOf(item) !== -1) {
        str = str.replace(item, '');
      } else {
        iterator += 1;
      }
    });

    if (iterator === strConf.length) {
      strConf.length = 0;
    }
  }

  return !str.length
}
