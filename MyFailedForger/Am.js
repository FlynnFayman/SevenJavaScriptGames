//importing Anamtion java script

export class VerticalMovingObjectWithSize2 {
    constructor(ListOfItemsToTrans,ObjectClassTranversing,RightMoving){
        this.LOITT = ListOfItemsToTrans;
        this.OCT = ObjectClassTranversing;
        this.RMboole = RightMoving;
        this.lengthOfGrid = ListOfItemsToTrans.length
    }
    //This methode is the main

    StartandSelectMovement(){
        if(this.RMboole == true){
            this.index0 = 0
            this.index1 = 1
            setInterval(this.move_right(this.index0,this.index1), 100)
        }
        else{
            this.index0 = this.length-1
            this.index1 = this.length-2
            setInterval(this.move_left(this.index0,this.index1), 100)
        }


    }

    move_right(){
        this.LOITT[this.index0].classList.add(this.ObjectClassTranversing)
        this.LOITT[this.index1].classList.add(this.ObjectClassTranversing)
        this.index0++;
        this.index1++;
        this.index0 = this.index0 % this.lengthOfGrid;
        this.index1 = this.index1 % this.lengthOfGrid;
        setTimeout(100)
        this.LOITT[this.index0].classList.remove(this.ObjectClassTranversing)
        this.LOITT[this.index1].classList.remove(this.ObjectClassTranversing)

    }

    move_left(){
        this.index0--;
        this.index1--;
        if(this.index0 < 0){
            this.index0 = this.length-1;
        }
        if(this.index1 < 0){
            this.index1 = this.length-1;
        }
        this.LOITT[this.index0].classList.add(this.ObjectClassTranversing)
        this.LOITT[this.index1].classList.add(this.ObjectClassTranversing)
        setTimeout(100)
        this.LOITT[this.index0].classList.remove(this.ObjectClassTranversing)
        this.LOITT[this.index1].classList.remove(this.ObjectClassTranversing)
    };
}

export default VerticalMovingObjectWithSize2;

