const findTheOldest = function(people) {
    const ordered = people.sort(function(a, b){
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
