import { helper } from '@ember/component/helper';

export function formatNum (value) {

  var numForm = value.toString().split(".");
  numForm[0] = numForm[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return numForm.join(".");

}


export default helper(formatNum);
