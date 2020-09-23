import { helper } from '@ember/component/helper';

function numberFormatter(params) {
  let formatted = new Intl.NumberFormat().format(params);

  return formatted;
};

export default helper(numberFormatter);
