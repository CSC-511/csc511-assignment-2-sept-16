import { helper } from '@ember/component/helper';


export function gte ([num1, num2]) {

    if(num1 >= num2)
        return true
    else   
        return false

}


export default helper(gte);