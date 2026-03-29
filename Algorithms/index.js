// You’re given an array of numbers from 1 to n, but one number is missing. Find it.

function findMissing(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

// First non repeating character.

function firstUniqueChar(str) {
    const map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of str) {
        if (map[char] === 1) return char;
    }

    return null;
}


// Find indices of two numbers that add up to target.

function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map[diff] !== undefined) {
            return [map[diff], i];
        }

        map[nums[i]] = i;
    }
}


function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}



function maxSubArray(nums) {
    let max = nums[0];
    let current = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        max = Math.max(max, current);
    }

    return max;
}

function groupAnagrams(strs) {
    const map = {};

    for (let str of strs) {
        const key = str.split("").sort().join("");
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }

    return Object.values(map);
}


function longestSubstring(s) {
  let set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
}