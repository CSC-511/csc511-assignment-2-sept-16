import { helper } from "@ember/component/helper"
let sum = ([array]) => { //tried using the export function down below, only let works
    var total = 0

    for(let i = 0; i < array.length; i++)
    {
      if (Number.isInteger(array[i])){
        var total = array[i] + total
      }
      else{
        return("not valid, a non number was passed into this array")
      }
    }

    return total
}

export default helper(sum)

// import { helper } from '@ember/component/helper'; 
// export function sumAll(params) {
//   var sum = 0;
//   for(var i=0; i < params.length; i++){
//     if (Number.isInteger(params[i])){
//       var sum = params[i] + sum
//       console.log(sum)
//     }
//     else{
//       return("N/A, all elements must be numbers. ")
//     }
//   }
// return(sum)
// }
// export default helper(sumAll);




