import { helper } from '@ember/component/helper';

function eq ([input1, input2]) {
    if(input1 === input2)
        return true;
    
    else{
        return false;
    }
}
export default helper(eq);