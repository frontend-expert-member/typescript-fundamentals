//variables.ts

for(var i = 0; i < 10; i++){
    setTimeout(function(i){
        console.log(i);
}, 100 * i);
}

