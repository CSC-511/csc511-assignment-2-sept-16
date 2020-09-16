import { helper } from '@ember/component/helper';
export function formatEC (value) {
  var numSep = value.toString().split("."); //split string 
  numSep[0] = numSep[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); //add commas
  return numSep.join("."); //join back
}
export default helper(formatEC);