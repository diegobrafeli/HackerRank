export default function Test(){

function numbersCompare(a, b) {
    return a - b;
}

function minimumBribes(q){
    // Write your code here

    let totalSteps = 0;
    let isChaotic = false;

    let arrayFix = [...q];
    let arrayNumberShift = 0

    for (let i = q.length - 1; i >= 0; i--) {

        
        for (let j = 0; j < 4; j++) {
            //console.log("N:",i + 1,"Q[x]:", arrayFix[i - j],"j:", j,"i:", i);
            
            if(j > 2){
                isChaotic = true
                break
            }
            
            if(arrayFix[i - j] === (i + 1)){
                arrayNumberShift = arrayFix.splice(i - j , 1);
                arrayFix.splice(i , 0, arrayNumberShift[0]);
                //console.log(arrayFix);
                totalSteps += j;
                break
            }
            
        }

        if(isChaotic){
            console.log("Too chaotic")
            break
        }
        
    }
    isChaotic ? false : console.log(totalSteps)
    
}

    //generation of entries=================================================

    //END generation of entries=============================================

    minimumBribes([2, 5, 1, 3, 4])
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