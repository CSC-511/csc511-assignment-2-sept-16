
import { helper } from '@ember/component/helper';

export default helper(function sumall([sumThis]) {

  var sum = null;

 
    for(var i = 0; i < sumThis.get('length'); i++){
      if (typeof (sumThis[i]) != "string"){
        return "ERROR not all string values!";
      }      
        sum += +sumThis[i];
       
    }
    
    console.log(typeof sumThis[8]);
    console.log(sumThis);
    console.log(sum);
    console.log(sumThis.get('length'));
    return "The sum is : " + sum;
    
});