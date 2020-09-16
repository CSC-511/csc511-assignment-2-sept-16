ethereum.autoRefreshOnNetworkChange = false;

import Component from '@glimmer/component';
import { tracked }from '@glimmer/tracking';

export default class NumberCalComponent extends Component {
    
    //Array
    myArr = [1,2,3,4,5,6,7,8,9];
    errorArr = [1,2,3,'James',8,7];

    //First eq tester
    compNum1 = 5;
    compNum2 = 5;

    //second eq tester
    compNum3 = 10;
    compNum4 = 2;

    //formarNum Testers
    fNum1 = 15000;
    fNum2 = 10000000;
    @tracked solution;
    @tracked currentNo1;
    @tracked currentNo2;

    constructor(){
        super(...arguments);
    }

    getInput(){
        this.currentNo1 = document.getElementById("firstNo").value;
        this.currentNo2 = document.getElementById("secondNo").value;
       
        document.getElementById("sol").innerHTML = this.currentNo1 + " + " +this.currentNo2 + " = ";
        document.getElementById("manualEq").innerHTML = this.currentNo1 + " == " +this.currentNo2 + ":";
        this.solution = this.addNum(this.currentNo1,this.currentNo2);
    }
    

    addNum(num1,num2){
       return num1+num2;
    }
    

}
