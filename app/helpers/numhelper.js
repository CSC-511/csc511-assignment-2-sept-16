import { helper } from '@ember/component/helper';

function numhelper([numbs])
{
    let result = numbs.reduce((a,b)=> a+b);
    
    return (!isNaN(result) ? result : "NOT ALL VALUES ARE NUMBERS");
}


export default helper(numhelper);