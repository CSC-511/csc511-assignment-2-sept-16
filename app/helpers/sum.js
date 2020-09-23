import { helper } from '@ember/component/helper';

function sum(params) {
  let total = 0;
  let notNumber = 0;

  params.forEach(addItUp);

  function addItUp(x){
    if(typeof x == 'number'){
      total += x;
    } else{
      notNumber = 1;
    }
  }

  if(notNumber)
    return "NOT ALL VALUES ARE NUMBERS";
  else
    return total;
};

export default helper(sum);