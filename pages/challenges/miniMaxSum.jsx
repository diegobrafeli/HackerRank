export default function Test(){

function miniMaxSum(arr) {
    // Write your code here
    arr.sort()//Verificarrrrrrr pois pra numero precisa ter uma funcao a - b
    
    const miniMax = {
        max: 0,
        min: 0
    }

    for (let i = arr.length - 1; i > arr.length - 5; i--) {
        miniMax.max += arr[i];
    }
    for (let i = 0; i < 4 ; i++) {
        miniMax.min += arr[i]
    }
    return (miniMax.min+" "+miniMax.max);
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(miniMaxSum([1, 2, 3, 4, 5]))
    return(<h1>Test</h1>)
}

// export default function Test(){

// function NameFunc(){
//     // Write your code here
//     console.log();


//     return ""
// }

//     //generation of entries=================================================

//     //END generation of entries=============================================

//     console.log(NameFunc())
//     return(<h1>Test</h1>)
// }