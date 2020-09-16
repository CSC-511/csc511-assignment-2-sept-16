import { helper } from '@ember/component/helper';

function gte(params) {
  let isGte = false;

  if(params[0] >= params[1])
    isGte = true;

  return isGte;
};

export default helper(gte);
