import { helper } from '@ember/component/helper';


let sumAll = ([params]) => {
  var sum = 0;

  for(var i=0; i < params.length; i++){

    if (Number.isInteger(params[i])){
      var sum = params[i] + sum
      console.log(sum)
    }

    else{
      return("N/A; all elements must be numbers. ")
    }

  }

return(sum)
}


export default helper(sumAll);
