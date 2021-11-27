let sum = 0;

function perfectNumbers(x){
    for(let i = 1; i < x; i++){
        if(x % i == 0){
            sum += i;

        }

    }
    if(sum == x){
        console.log("This is a perfect number.")
    }
    else {
        console.log("This is not a perfect number.")}



}

perfectNumbers(8128)