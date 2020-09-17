import Component from '@glimmer/component'

export default class BaseAssignmentComponent extends Component {

    numArray = [5, 5, 5, 3, 3, 7, 8, 9, 2, 1];
    badArray = ["1", 2, "three", 4, 5, "six", 7, 8, "9", "ten"];

    compareNum1 = 5;
    compareNum2 = 5;

    compareNum3 = 10;
    compareNum4 = 20;

    numToFormat1 = 5000;
    numToFormat2 = 1000000;

}

