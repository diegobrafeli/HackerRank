export default function Test(){

    function towerBreakers(n, m){
     // Write your code here
     if(m === 1){
        return 2
     }
     else if(n % 2 === 0){
         return 2
     }else {
         return 1
     }
        
    }

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(towerBreakers(1,500))

    return(
        <h1>Test</h1>
    )
}

// export default function Test(){

//     function NameFunc(){
//      // Write your code here


//      return ""
//     }

//     //generation of entries=================================================
//
//     //END generation of entries=============================================

//     console.log(NameFunc())

//     return(
//         <h1>Test</h1>
//     )
// }