import { helper } from '@ember/component/helper';

export default helper(function sum(param) {
    //alert(typeof param);  
    param = param[0];
    console.log(param);

    var i, isAllNums=true,sum=0;
    for(i=0;i<param.length;i++){
      if (typeof param[i] !=='number'){
        isAllNums = false;
        break;
      }    
      else{
        isAllNums=true;
      }
    }

    if(isAllNums){
      for(i=0;i<param.length;i++){
        sum=sum+param[i];
      }
      return sum;
    }
    else{
      return "NOT ALL VALUES ARE NUMBERS";
    }
});
