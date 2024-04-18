/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = 0;
    let totalSum = 0;
    nums.forEach(e => totalSum+=e);
    for(let i = 0; i<nums.length; i++){
        if(totalSum - sumLeft - nums[i] === sumLeft){
            return i;
        }
        sumLeft+=nums[i]
    }
    return -1
};
//sumLeft = 0 +1+7+3
//28 - 0 -1 = 0; false
//28 - 1 -7 = 1; false
//28 - 8 -3 = 8; false
//28 - 11 -6 = 11; true