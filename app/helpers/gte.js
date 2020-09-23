import { helper } from '@ember/component/helper';

export default helper(function gte([value1, value2]) {
  if(value1 >= value2){
      return "first value is greater or equal to second"
  }
    else{ 
      return "first value is less than and not equal to second";
    }
});
