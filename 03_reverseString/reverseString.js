const reverseString = function(entry) {
    let reverse = [];
    let splitString = entry.split('');

    for (const char of splitString){
        reverse.unshift(char);
    }

    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
