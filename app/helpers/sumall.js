
import { helper } from '@ember/component/helper';

export default helper(function sumall([sumThis]) {

  var sum = null;
 
    for(var i = 0; i < sumThis.get('length'); i++){
      if (typeof (sumThis[i]) != "string"){
        return "ERROR not all string values!";
      }      
        sum += +sumThis[i];       
      }
      return "The sum is : " + sum;
    
});
