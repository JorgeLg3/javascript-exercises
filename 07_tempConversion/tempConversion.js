const ftoc = function(fDeg) {
  let cDeg = (fDeg - 32) * 5 / 9;
  let result = Math.round(cDeg*10)/10;

  return result;
};

const ctof = function(cDeg) {
  let fDeg = cDeg * 9 / 5 + 32;

  return Math.round(fDeg*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
