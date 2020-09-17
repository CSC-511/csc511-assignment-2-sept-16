import { helper } from '@ember/component/helper';

function formatNum(num){
    
    var val = num.toString().split(".");
    val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return val.join(".");
}

export default helper(formatNum);