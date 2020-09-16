import { helper } from '@ember/component/helper';

function gte([nums]) {
    return nums[0] >= nums[1];;
}

export default helper(gte);