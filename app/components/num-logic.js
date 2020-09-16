import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class NumLogicComponent extends Component {

    @tracked currentValue;
    @tracked currentValueA;
    @tracked currentValueB;
    @tracked currentValueC;
    @tracked nums = [0];
    @tracked compNums= [];
    @tracked formattedNum;

    constructor(){
        super(...arguments);
    }

    addToArray(num){
        this.nums.pushObject(parseInt(num));
        this.currentValue = '';
    }

    clearArray(){
        this.nums = [];
    }
    addToCompareAr(numa, numb){
        this.compNums = [];
        this.compNums.pushObject(parseInt(numa));
        this.compNums.pushObject(parseInt(numb));
        this.currentValueA = '';
        this.currentValueB = '';
    }

    addToFormat(num){
        this.formattedNum = num;
        this.currentValueC = "";
    }
    
    changeValue(num){
        this.currentValue = num.target.value;
    }

    changeValueA(num){
        this.currentValueA = num.target.value;
    }

    changeValueB(num){
        this.currentValueB = num.target.value;
    }

    changeValueC(num){
        this.currentValueC = num.target.value;
    }
}
