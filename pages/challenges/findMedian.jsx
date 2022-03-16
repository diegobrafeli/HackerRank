export default function Test(){

    function compare(a,b){
        return a - b;
    }

    
    function findMedian(arr) {
        // Write your code here
        console.log(arr);

        arr.sort(compare);

        const indexMedian = Math.floor(arr.length/2) 

        console.log(indexMedian, arr[indexMedian]);
        return arr[indexMedian]
    }

    //generation of entries=================================================

    function nRandom(n, min, max){

        let matrix = [];

        for (let index = 0; index < n; index++) {
            matrix.push(Math.ceil(Math.random()*(max - min) + min));
        }

        return matrix;
    }
    //END generation of entries=============================================

    findMedian(nRandom(11, 0, 10))
    //n is odd

    return(
        <h1>Test</h1>
    )
}

// export default function Test(){

//     function NameFunc(){
//      // Write your code here

//     }

//     //generation of entries=================================================
//
//     //END generation of entries=============================================

//     NameFunc()

//     return(
//         <h1>Test</h1>
//     )
// }