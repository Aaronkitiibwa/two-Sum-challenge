//declare function twoSum which takes two parameters nums and target
//set an array and a desired target
//create a loop as counter that wil iterate to give the first counter
//create another loop that will iterate through the numbers to give the second counter
//write a formula to add the two numbers picked in the array
//write a conditional statement that seeks to test if the sum obtained in step 4 is equal to the target
//then return the indices of the numbers that gave us the target.

function twoSum(nums, target){
for(i=0; i<nums.length; i++){
  for(j=1; j<nums.length; j++){
    let sum = nums[i] + nums[j];
    if(sum ==22){
console.log([i, j])
    }
  }
}
}

twoSum([2,7,11,15], 22)