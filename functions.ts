
function getAddition(a: number,b: number): number{
    return a + b;
}

console.log(getAddition(3,4));

function f(shouldInitialize: boolean){
    if(shouldInitialize){
        var x = 10;
    }
    return x;
}

console.log('1 st = ' + f(true));
console.log('2 nd = ' + f(false));


