export default function Test(){

function getUniqueCharacter(s){
    // Write your code here
    console.log(s);

    let arrayS = s.split('');

    const objLetter  = {}

    let indexChar = -1

    arrayS.forEach((item)=>{
        objLetter[item] ? objLetter[item] += 1 : objLetter[item] = 1
    })

    for (let i = 0; i < arrayS.length; i++) {
       
        if(objLetter[arrayS[i]] === 1 ){
            indexChar = i + 1;
            break
        }
         
    }

    //console.log(indexChar,objLetter);

    return indexChar
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(getUniqueCharacter("ffergertgertgwetrteyhtujhghfdhsfdghsfuhjsfgjsfghftgyhtuyiopyute"))
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