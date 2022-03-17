export default function Test(){

function minimumBribes(q) {

    //Honest thanks to ntwong0
    let numberOfBribes = 0;
    
    let expected = [1,2,3];
    for(let i = 0; i < q.length; i++){
        
        let lastExpected = expected[2];
        if(q[i] == expected[0]){
            expected.splice(0,1);
        }else if(q[i] == expected[1]){
            numberOfBribes +=1;
            expected.splice(1,1);
        } else if(q[i]== expected[2]) {
            numberOfBribes += 2;
            expected.splice(2,1);
        } else {
            console.log("Too chaotic");
            return;
        }
        expected.push(lastExpected + 1);
    }
    
    console.log(numberOfBribes);
    
}

    //generation of entries=================================================

    //END generation of entries=============================================

    minimumBribes([1,2,5,3,7,8,6,4])
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