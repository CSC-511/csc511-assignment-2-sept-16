import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class NumberTrackerComponent extends Component
 {
    @tracked currentValue;
    @tracked currentValueA;
    @tracked currentValueB;
    @tracked currentValueC;
    @tracked numbs = [0];
    @tracked formattedNum;
    @tracked comparenumbs= [];
   

    constructor()
    {
        super(...arguments);
    }

    Format(num)
    {
        this.formattedNum = num;
        this.currentValueC = "";
    }

    addToArray(num)
    {
        this.numbs.pushObject(parseInt(num));
        this.currentValue = '';
    }

    CompareAr(numa, numb)
    {
        this.comparenumbs = [];
        this.comparenumbs.pushObject(parseInt(numa));
        this.comparenumbs.pushObject(parseInt(numb));
        this.currentValueA = '';
        this.currentValueB = '';
        this.comparenumbs.push
    }
    
    clearArray()
    {
        this.numbs = [];
    }


    changeValue(num)
    {
        this.currentValue = num.target.value;
    }

    changeValueA(num)
    {
        this.currentValueA = num.target.value;
    }

    changeValueB(num)
    {
        this.currentValueB = num.target.value;
    }

    changeValueC(num)
    {
        this.currentValueC = num.target.value;
    }
}
