import { helper } from '@ember/component/helper';

function gte([numbs])
{
    if (numbs[0]>=numbs[1]) 
    {
    return numbs[0] >= numbs[1];
    }

    else return false
}


export default helper(gte);