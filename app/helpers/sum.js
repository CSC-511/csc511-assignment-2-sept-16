import {helper} from '@ember/component/helper';

function sum(args) {
  let temp = args.toString();
  let error = "Not all values are numbers"
  let answer = 0;
  if(temp.match(/[^\d\s]/)){
    return error;
  }
  if (temp.includes(" ")) {
    let numbers = temp.split(/\s+/);
    for (let x = 0; x < numbers.length; x++) {
      if(numbers[x].match(/\d+/)){
        let parseNum = parseInt(numbers[x]);
        answer += parseNum;
      }     
    }  
    if(answer%2 == 0){
      return answer + ", which is also an even number.";
    }
    else
      return answer;
  }
  if(temp != null){
    return temp;
  }
}

export default helper(sum);
