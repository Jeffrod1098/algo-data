
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