import Ember from 'ember';

export function eq([val1, val2]) {
    if(val1 == val2)
      return true 
    return false

}
export default Ember.Helper.helper(eq);