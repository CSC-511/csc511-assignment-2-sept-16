import { helper } from '@ember/component/helper';

export default helper(function eq([value1, value2]) {
  if(value1 === value2){
      return "is equal"
  }
    else{ 
      return "is not equal";
    }
});
