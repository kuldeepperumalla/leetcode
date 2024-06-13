/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1, max = Number.MIN_SAFE_INTEGER;
    if (nums.length === 0) return 0

    for(let i=1; i<=nums.length; i++) {
        if (i === nums.length) return Math.max(count, max)
        if (nums[i] > nums[i-1]) {
            count++;
        }
        else {
            max = Math.max(count, max);
            count = 1;
        }
    }
    return max



    let ans = 0, anchor = 0;
    for (let i=0; i<nums.length; i++) {
        if (i>0 && nums[i-1]>nums[i]) anchor = i;
        ans = Math.max(ans, i - anchor + 1)
    }
    return ans
};