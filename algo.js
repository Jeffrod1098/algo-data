
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
