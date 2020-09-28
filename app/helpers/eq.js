import { helper } from '@ember/component/helper';

function eq([numbs])
{
    return numbs[0] === numbs[1];
}


export default helper(eq);
