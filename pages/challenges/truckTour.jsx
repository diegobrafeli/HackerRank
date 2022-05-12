export default function Test(){

function truckTour(petrolpumps) {
    let petrol = 0;
    let pump = 0;

    for(let i = 0; i < petrolpumps.length; i++) {
        petrol += petrolpumps[i][0];
        petrol -= petrolpumps[i][1];
        if(petrol < 0) {
            petrol = 0;
            pump = i + 1;
        }
    }
    return pump
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(truckTour([ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ]))
    return(<h1>Test</h1>)
}

//Restart --------------------------------------------------------------------

// export default function Test(){

// function NameFunc(){
//     // Write your code here
//     console.log(); //show input variables


//     return ""
// }

//     //generation of entries=================================================

//     //END generation of entries=============================================

//     console.log(NameFunc())
//     return(<h1>Test</h1>)
// }