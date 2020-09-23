import { helper } from '@ember/component/helper';

function eq(params) {
  let isEqual = 0;

  if(params[0] === params[1])
    isEqual = 1;

  return isEqual;
};

export default helper(eq);

