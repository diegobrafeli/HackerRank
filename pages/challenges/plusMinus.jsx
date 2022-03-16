export default function Test(){

function plusMinus(arr) {
    // Write your code here
    let proportions = {
        positive: 0,
        negative: 0,
        zero: 0,
        total: 0
    }
    arr.forEach((element) => {
        element > 0 ? proportions.positive++ : false
        element < 0 ? proportions.negative++ : false
        element === 0 ? proportions.zero++ : false 
        proportions.total++
    });

    // console.log(proportions);
    
    console.log((proportions.positive/proportions.total).toFixed(6));
    console.log((proportions.negative/proportions.total).toFixed(6));
    console.log((proportions.zero/proportions.total).toFixed(6));    
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
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