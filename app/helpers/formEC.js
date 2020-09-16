
import { helper } from '@ember/component/helper';

export function formatEC (value) {

  var num = value.toString().split(".");
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return num.join(".");

}


export default helper(formatEC);