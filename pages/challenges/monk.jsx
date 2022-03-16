export default function Test(){

    
    function Mock(matrix){

        let arrayMaxRow = []
        const n = matrix[0].length;
        const numberItens = Math.pow(n,2);

        console.log(n,numberItens);

        

        let j = 0, i = 0; 
        let max = 0

        for (let index = 0; index < Math.pow(n/2, 2) ; index++) {


            max = Math.max( matrix[i][j], matrix[i][(n -1 - j)], matrix[(n -1 - i)][j], matrix[(n -1 - i)][(n -1 -j)] )
            i++;

            // (0,0)(0,3)(3,0)(3,3)
            // (1,0)(1,3)(2,0)(2,3)

            // (0,1)(0,2)(3,1)(3,2)
            // (1,1)(1,2)(2,1)(2,2)

            if((index + 1) % (n/2) == 0){
                i = 0;
                j += 1; 
            }
            
            arrayMaxRow.push(max)
            
            
        }

       

       console.log(arrayMaxRow);

    }

    Mock([[1,  2, 3,  8],
          [3,  4, 5,  7],
          [10, 8, 15, 2],
          [8,  17, 15, 20]])

    return(
        <h1>Test</h1>
    )
}