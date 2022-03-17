export default function Test(){

    // steps = q[i] - (i + 1)

    // if(steps > 2){
    //     isChaotic = true
    //     break
    // } else if(steps > 0) {
    //     totalSteps += steps;
    // } else if( steps < stepsBefore && stepsBefore < 0) {
    //     //console.log(i,q[i], stepsBefore ,steps);
    //     totalSteps += (stepsBefore - steps - 2);
    // }

    // stepsBefore = steps;
// function numbersCompare(a, b) {
//     return a - b;
// }

function minimumBribes(q){
    // Write your code here

    let totalSteps = 0;
    let steps = 0;
    let stepsBefore = 0;
    let isChaotic = false;

    let arrayBiger = []
    let numberDone = 0

    for (let i = 0; i < q.length; i++) {

        for (let j = 0; j <= i; j++) {
            (q[j] >  q[i]) ? totalSteps++ : false 
        }

        steps = q[i] - (i + 1)
        if(steps > 2){
            isChaotic = true
            break
        }
        
    }

    isChaotic ? console.log("Too chaotic") : console.log(totalSteps);
    
}

    //generation of entries=================================================

    //END generation of entries=============================================

    minimumBribes([1, 2, 5, 3, 7 ,8 , 9, 6 ,4])
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