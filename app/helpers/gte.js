import { helper } from '@ember/component/helper';

function gte([input1, input2]){
    if(input1 > input2)
        return true;

    else
        return false;
}

export default helper(gte);
