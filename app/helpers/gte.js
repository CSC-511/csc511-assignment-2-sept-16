import Ember from 'ember';

export function gte([val1, val2]) {
    if(val1 >= val2)
      return true 
    return false

}
export default Ember.Helper.helper(gte);