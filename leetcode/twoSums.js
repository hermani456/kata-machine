// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


const sumTwoNums = (nums, target) => {
    const indexNumMap = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (Object.hasOwn(indexNumMap, difference)) {
            return [i, indexNumMap[difference]];
        }

        indexNumMap[nums[i]] = i;
    }

    return null;
};


console.log(sumTwoNums([2, 11, 7, 15], 9));


const two = (nums, target) =>{
    const indexAndNumber = {}
    for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i]

        if(Object.hasOwn(indexAndNumber, difference)){
            return [i, indexAndNumber[difference]]
        }
        indexAndNumber[nums[i]] = i
    }
}