const removeFromArray = function(originalArray, removes) {
    const newArray = [];
    for (const element of originalArray){
        if (removes!=element){
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
