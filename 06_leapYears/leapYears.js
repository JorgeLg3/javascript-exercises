const leapYears = function(year) {
    if ((year%4 == 0) && (year%100 != 0) || (year%400)){
        result = true;
    }
    else { result = false;}
    
    return result;
};

// Do not edit below this line
module.exports = leapYears;
