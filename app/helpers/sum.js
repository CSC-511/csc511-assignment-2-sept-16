import { helper } from '@ember/component/helper';


let sum = ([params]) => {
  var total = 0;

  for(var i=0; i < params.length; i++){

    if (Number.isInteger(params[i])){
      var total = params[i] + total
      console.log(total)
    }

    else{
      return("N/A; all elements must be numbers. ")
    }

  }

return(total)
}


export default helper(sum);