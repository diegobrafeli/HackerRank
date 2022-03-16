export default function Test(){

    function caesarCipher(s, k){
        // Write your code here

        let text = "";
        let letterCode = 0;
        
        (k > 26) ? k = k % 26 : false

        for (let i = 0; i < s.length; i++) {

            letterCode = Number(s.charCodeAt(i));

            if(letterCode >= 65 && letterCode <= 90){

                letterCode += k;
                letterCode > 90 ? letterCode = letterCode - 90 + 64 : false
                text += String.fromCharCode(letterCode)

            }else if(letterCode >= 97 && letterCode <= 122){
                
                letterCode += k; 
                letterCode > 122 ? letterCode = letterCode - 122 + 96 : false
                text += String.fromCharCode(letterCode)
                
            }
            else{
                text += s[i]
            }
                
        }

        return text
    }

    //generation of entries=================================================

    //END generation of entries=============================================

    console.log(caesarCipher("AZaz",27))

    return(
        <h1>Test</h1>
    )
}

// export default function Test(){

//     function NameFunc(){
//         // Write your code here


//         return ""
//     }

//     //generation of entries=================================================

//     //END generation of entries=============================================

//     console.log(NameFunc())

//     return(
//         <h1>Test</h1>
//     )
// }