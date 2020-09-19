import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';


export default class BaseAssignmentComponent extends Component {
    @tracked num = null;
    @tracked arg1 = null;
    @tracked arg2 = null;
    @tracked numSize = 0;

    assign(input){  
        this.num = input.target.value;   
        let size = this.num.split(/\s+\d/); 
        this.numSize = size.length;  
    }
    assignArg1(input){  
        this.arg1 = input.target.value;      
    }
    assignArg2(input){  
        this.arg2 = input.target.value;      
    }
}