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


console.log(sumTwoNums([2, 7, 11, 15], 9));