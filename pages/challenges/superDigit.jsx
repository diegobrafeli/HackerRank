export default function Test(){

function superDigit(n, k){
    // Write your code here

    //solution small
    // let p = (n.split('').map(Number).reduce((a,b) => a+b, 0)*k).toString()
    // return p.length > 1 ? superDigit(p, 1) : p

    const arrayTextNumber = n.split('');

    const newNumber = arrayTextNumber.reduce((acc, cur)=>{
        acc += Number(cur);
        return acc
    },0)

    const newTxtNumber = (newNumber * k).toString();

    return newTxtNumber.length > 1 ? superDigit(newTxtNumber, 1) : Number(newTxtNumber)
}

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(superDigit("148",3))
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