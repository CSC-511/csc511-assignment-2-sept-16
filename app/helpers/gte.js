import { helper } from '@ember/component/helper';

function gte(args){
  let args1 = args[0];
  let args2 = args[1];
  if(args1 == "" || args2 == ""){
    return null;
  }
  if(args1 != null && args2 != null){
    if(args1 >= args2){
    return "The first value is greater than or equal to the second value: " + true + ".";
    }
    else 
    return "The first value is greater than or equal to the second value: " +false + ".";
  }
}

export default helper(gte)