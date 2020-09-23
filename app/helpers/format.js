import { helper } from '@ember/component/helper';

function format(args){
  return args.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default helper(format);
