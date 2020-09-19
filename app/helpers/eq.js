import { helper } from '@ember/component/helper';

function eq(args){
  let args1 = args[0];
  let args2 = args[1];
  if(args1 == "" || args2 == ""){
    return null;
  }
  if(args1 != null && args2 != null){
    if(args1 == args2){
    return true + ".";
    }
    else 
    return false + ".";
  } 
}


export default helper(eq);
