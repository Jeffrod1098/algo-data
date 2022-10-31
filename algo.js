
const sumzero = function(arr){
    for(let i = 0; i < arr.length; i++){
      for (let j =i+1; j < arr.length; j++){
        if (arr[i] + arr[j] === 0){
          return [arr[i], arr[j]]
        }
      }
    }
  }
  
  console.log(sumzero([2,1,0,-1,-2]))



  // _________________________________________
// function sumZeroN(arr) {
//   let left = 0;
//   let right = arr.length -1;
//   while(left < right){
//     let sum = arr[left]+ arr[right];
//     if(sum === 0){
//       return [arr[left], arr[right]];
//     }else if(sum > 0){
//       right --;
//     }else{
//       left++;
//     }
//   }
// }

// console.log(sumZeroN([4,1,0,-1,-2]))


// _________________________________________

function countUniqueValues(arr){
  let i = 0
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }  
  }
  return i + 1 
}

// _________________________________________

function isThisAnAnagram(str1, str2){
  if (str1.length !== str2.length){
    return false
  }

  let lookUp = {}
  for(i = 0; i < str1.length; i++){
    if(!lookUp[str1[i]]){
      lookUp[str1[i]] = 1
    } else{
      lookUp[str1[i]] += 1
    }
  }
  for (i = 0; i < str2.length; i++){
      if (!lookUp[str2[i]]){
      return false
    }else {
        lookUp[str2] -= 1
    }
  }
  return true
  console.log(lookUp)
}

console.log(isThisAnAnagram('aza','zaa'))


// _________________________________________

function sameFrequency(num1, num2){
  str1 = num1.toString()
  str2 = num2.toString()

  if(str1.length !== str2.length){
    return false
  }

  let countStr1 = {}
  let countStr2 = {}

  for (let i = 0; i < str1.length; i++){
    if(!countStr1[str1[i]]){
      countStr1[str1[i]] = 1
    } else {
      countStr1[str1[i]] += 1
    }
    console.log(countStr1)
  }  

    for (let i = 0; i < str2.length; i++){
    countStr2[str2[i]] = (countStr2[str2[i]] || 0 ) + 1 
      // console.log(countStr2)
  }  
  for(let key in countStr1){
    if(countStr1[key] !== countStr2[key]) return false;
  }
 
  return true;

  
}

console.log(sameFrequency(3589578, 5879385))



// _________________________________________


function averagePair(arr, num){
  let start = 0 
  let end = arr.length-1
  while(start < end){
    let avg = (arr[start] + arr[end])/2
    if(avg === num){
      return true;
    }else if(avg < num){
      start ++;
    }else{--end}
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
// 

function isSubsequence(str1, str2){
  let i = 0
  let j = 0
  if(!str1){
    true
  }
  while(j < str2.length){
    if(str1[i]===str2[j]){
      i++
    }else if(i === str1.length){
      return true 
    }else{
      j++
    }
  }
  return false
  
}

  


console.log(isSubsequence('sing', 'sting'))

// generateShape function makes a shape using the integer, which determines how many line and how many '+' are in each line 
// using '\n' made a line break to help make the shape
// trim method trimmed of the last '\n' in the function

function generateShape(integer){

  let line = ''
  for (let i = 0; i < integer; i++){
    for (let j = 0; j < integer; j++){
      line += '+'
    }
    line += '\n'
  }
 return line.trim()

}


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



function solution(str, ending){
  for(let i = ending.length; i > 0; i--){
    if (str[str.length - i] == ending[ending.length - i]){
      console.log(ending[ending.length - i])
    }else{
      return false
    }
  }
    
  }


  // Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

  // Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.


function maxSubarrySum(arr, num){
  if (num > arr.length){
    return null
  }

  max = -Infinty 
  for (let i = 0; i < arr.lenth - num + 1; i++){
    temp = 0 
    for (let j = 0; j < num; j++){
      temp += arr[i + j]
    }
    if (temp >= max){
      max = temp 
    }
    return max
  } 
}



// _________________________________________

function areThereDuplicates() {
  let holder = {}
  for(let value in arguments ){
    if (!holder[arguments[value]]){
      holder[arguments[value]] = 1
    } else {
      holder[arguments[value]] += 1
    }
  }
  for(let key in holder){
    if(holder[key] > 1) return true
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3))

// Write a function to help Leo out. The first parameter of the function is Leo budget the second one is an array containing the price of each gift.
// You should return an integer representing the maximum amount of gifts Leo can buy.

function howManyGifts(maxBudget, gifts){
  gifts = gifts.sort((a,b) => a - b)
  
  let giftsTobuy = []
  let sumOfGifts = 0;
  
  for (let i = 0; i < gifts.length; i++) {  
    if ((sumOfGifts += gifts[i]) <= maxBudget) {   
      giftsTobuy.push(gifts[i])
    }
  }

  return giftsTobuy.length
}


howManyGifts(20, [13, 2, 4, 6, 1])

howManyGifts(0, [1])



// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.


function vowelOne(s){
  s = s.toLowerCase()
  const arr = ['a', 'e', 'i', 'o', 'u']
  let result = ''
  for (el of s) {
    arr.includes(el) ? result += '1' : result += '0'
  }
  return result
}