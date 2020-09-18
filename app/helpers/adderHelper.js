import { helper } from "@ember/component/helper"
let adderHelper = ([array]) => {
    let sum = 0

    // array.forEach((number) => {
    //     if (isNaN(number))
    //         return "NOT ALL VALUES ARE NUMBERS"
            
    //     sum = sum + number
    // })

    for(let i = 0; i < array.length; i++)
    {
        if(isNaN(array[i]))
            return "NOT ALL VALUES ARE NUMBERS"
       
        sum = sum + array[i]
    }

    return sum
}

export default helper(adderHelper)