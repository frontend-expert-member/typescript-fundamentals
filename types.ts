//Boolean
let myBool: boolean;
myBool = true;
console.log(myBool);

//Number Datatype
let decimal: number = 6;
console.log(decimal);
let octal: number = 0o744;
console.log(octal);

//String
let fullName: string = "John Doe";
let sentence: string = `Hello, my name is ${fullName}`;
console.log(sentence);

//Array
let list: number[] = [1,2,3];
console.log(list);

let listArr: Array<number> = [4,5,6];
console.log(listArr);

//Tuple Datatype
let x: [string, number];
x = ["test",6];
console.log(x);

//Enum
enum Color {Red, Green, Blue};
let c: Color = Color.Red;
console.log(c);

//Any Datatype
let notSure: any = 4;
console.log(notSure);
let beSure: any = "Hello this is a string";
console.log(beSure);
let defSure: any = false;
console.log(defSure);

//Void
function warnUser(): void {
    alert("This is warning message");
}

warnUser();

//Type Assertion (type cast)
let myStr: string = "Here is my string";

let myStrLength: number =  (<string>myStr).length;

console.log(myStr);
console.log(myStrLength);

