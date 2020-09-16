import { helper} from "@ember/component/helper"

let eq = ([val1 , val2]) => {
    if(val1 === val2)
        return true
        
    return false

}

// function eq([val1,val2]){
//     if(val1 === val2)
//         return true
    
//     return false
// }

export default helper(eq)