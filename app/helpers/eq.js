import { helper } from '@ember/component/helper';

function eq([nums]) {
    return nums[0] === nums[1];
}

export default helper(eq);