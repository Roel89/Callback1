/*******************************************************************************
*******************************************************************************/

function myFilter(array, cb) {
    // Your code here
    let filterArray = [];
    for(let i = 0; i < array.length; i++) {
            if(cb(array[i]) )
            filterArray.push((array[i]))

    }
    return filterArray;
};


let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myFilter;
} catch(e) {
    return null;
}
