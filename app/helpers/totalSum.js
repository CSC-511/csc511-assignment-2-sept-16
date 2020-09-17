import { helper } from '@ember/component/helper';

function totalSum([input]){
    let sum = 0;
   
    for(let i =0;i<input.length; i++){
        if (isNaN(input[i]))
            return "NOT ALL VALUES ARE NUMBERS";

        sum = sum +input[i]; 
    }

    return sum;
    
}
export default helper(totalSum);

// sum = input.reduce(function(a,b){
    // },0);
 // return sum;