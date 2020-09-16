import { helper } from "@ember/component/helper"
import { sum } from '@ember/object/computed';

let helperSum = ([array]) => {
    
 let sum = 0
  let i = 0
    for(let i = 0; i < array.length; i++)
    {
        if(isNaN(array[i]))
            return "error, all enteries need to be numbers"
       
        sum += array[i]
    }
     return sum
}

export default helper(helperSum)