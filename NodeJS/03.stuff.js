let cat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

let add = function (a, b) {
    return a + b;
}

let pi = 3.1415;

// module.exports is an empty object
module.exports.cat = cat;
module.exports.add = add;
module.exports.pi = pi;

// module.exports = {
//     cat: cat,
//     add: add,
//     pi: pi
// };