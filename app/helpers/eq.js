import { helper} from "@ember/component/helper"

let eq = ([num1 , num2]) => {
    if(num1 == num2)
        return true
  else      
    return false
}
export default helper(eq)