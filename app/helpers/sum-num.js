import { helper } from '@ember/component/helper';

function sumNum([nums]) {

    let res = nums.reduce((a,b)=> a+b);
    return (!isNaN(res) ? res : "NOT ALL VALUES ARE NUMBERS");
}

export default helper(sumNum);