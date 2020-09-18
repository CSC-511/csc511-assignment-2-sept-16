import { helper } from "@ember/component/helper"

let gte = ([val1 , val2]) => {

    if(val1 >= val2)
        return true
    
    return false
}

export default helper(gte)