//Interface

interface labelledValue {
    label: string;
    size: number;
    firstName: string;
    flag: boolean;
}

function printLabel(labelledObj: labelledValue){
    console.log(labelledObj.label);
    console.log(labelledObj.size);
    console.log(labelledObj.firstName);
    console.log(labelledObj.flag);
}

let myObj = {size: 10, label: "This is test label", firstName: "testing", flag: true};
printLabel(myObj);

