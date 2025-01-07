/*
11 - Container With Most Water [medium]
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/


// Compact
const calcMaxArea = (heights) => {
    let lIdx = 0;
    let rIdx = heights.length - 1;

    let maxArea = 0;

    while (lIdx < rIdx) {
        maxArea = Math.max(maxArea, (rIdx - lIdx) * Math.min(heights[lIdx], heights[rIdx]));
        heights[lIdx] > heights[rIdx] ? rIdx-- : lIdx++;
    }

    return maxArea;
};

// Verbose
const calcMaxAreaV = (height) => {
    let left = 0;            // Left pointer starting from the leftmost edge
    let right = height.length - 1; // Right pointer starting from the rightmost edge
    let maxWater = 0;        // Initialize the maximum water capacity
    
    while (left < right) {
        // Calculate the width of the container
        let width = right - left;
        
        // Calculate the height of the container (the minimum height between the two lines)
        let h = Math.min(height[left], height[right]);
        
        // Calculate the water capacity of the current container
        let water = width * h;
        
        // Update the maximum water capacity if the current container holds more water
        maxWater = Math.max(maxWater, water);
        
        // Move the pointers towards each other
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};

const heights = [1,8,6,2,5,4,8,3,7];
const result = calcMaxArea(heights);
const result2 = calcMaxAreaV(heights);
console.log(result);
console.log(result2);