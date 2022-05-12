export default function Test(){

    // Inventory – Array methods exercise
    // The allowed array methods to this exercise are: map, filter, reducer and find.
    // const inventory = ['grapes','bananas','peaches','bananas','apples','apples','bananas'] 
    // const quantity = [2,5,3,4,6,1,9]
    // 1- build an array of objects that contains all this inventory information. 
    // it must have only one entry for each product. 
    // If the product on the inventory array is unique it must double the quantity 
    // of the product

function createObjInventoryQtd(inventory, quantity){
    // Write your code here

    const arrayObj = inventory.reduce((acumulator, current, index) =>{

        const itemObj = acumulator.find((item) => item.inventory === current);
        
        if(itemObj){
        
            itemObj.quantity += quantity[index];
            
        } else {
        
            let qtd = quantity[index];
            
            if (!inventory.slice((index + 1), inventory.length).includes(current))
            {
                qtd = 2 * qtd;
            }
            
            const obj = {
                inventory: current,
                quantity: qtd,
            }
            
            acumulator = [...acumulator, obj];
        
        }
        
        return acumulator;
            
    },[]);

    return arrayObj
}

    //generation of entries=================================================
    const inventory = ['grapes','bananas','peaches','bananas','apples','apples','bananas'] ;
    const quantity = [2,5,3,4,6,1,9];
    //END generation of entries=============================================

    console.log(createObjInventoryQtd(inventory, quantity))
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