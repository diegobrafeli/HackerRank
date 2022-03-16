export default function Test(){

function gridChallenge(grid){
    // Write your code here
    console.log(grid);

    const arrayTest = [...grid];

    arrayTest.forEach((item, index)=>{
        arrayTest[index] = item.split('').sort();
    })

    let test = "YES";

    for (let collum = 0; collum < arrayTest[0].length; collum++) {
       
        for (let row = 0; row < arrayTest.length - 1; row++) {
            if(arrayTest[row][collum].charCodeAt(0) > arrayTest[row + 1][collum].charCodeAt(0)){
                test = "NO";
                break
            }
        }

    }


    return test
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(gridChallenge([ 'abc', 'hjk', 'mpq', 'rtv' ]))
    // [ 'abc', 'lmp', 'qrt' ]
    // [ 'mpxz', 'abcd', 'wlmf' ]
    // [ 'abc', 'hjk', 'mpq', 'rtv' ]
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