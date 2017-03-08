class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName:string, lastName:string, age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        console.log("User Created  = " + this.firstName);
    }

    registered(){
        console.log(this.firstName + 'is now registered');
    }

    payInvoice(){
        console.log(this.lastName + ' has paid Invoice');
    }

}

class Member extends User {
    id: number;

    constructor(id: number, firstName: string, lastName: string, age: number){
        super(firstName,lastName,age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike:User  = new Member(1, "Test123", "testing", 44);

mike.payInvoice();