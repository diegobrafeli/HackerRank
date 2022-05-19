export default function Test(){

function NameFunc(list){
    // Write your code here

    let arrayItens = [];
    let positionId = [];

    list.forEach((element, index) => {

        if(!arrayItens.find((item) => item.id === element.id)){

            arrayItens = [...arrayItens, element];
            positionId.push(element.id) ;
        }
        else{

            let x = positionId.indexOf(element.id);
            console.log(x);
            arrayItens[x] = {...arrayItens[x], ...element}

        }
    });

    return arrayItens
}

    //generation of entries=================================================
    // const list = [
    //     {
    //       id: 2,
    //       name: 'John Doe'
    //     },
    //     {
    //       id: 1,
    //       name: 'Jane Doe'
    //     },
    //     {
    //       id: 3,
    //       name: 'Samuel Soe',
    //       phone: '+12223334444'
    //     },
    //     {
    //       id: 2,
    //       name: 'John Doe'
    //     },
    //     {
    //       id: 4,
    //       name: 'John Doe'
    //     },
    //   ];

      const list = [
        {
          id: 2,
          name: 'John Doe'
        },
        {
          id: 3,
          name: 'Jane Doe'
        },
        {
          id: 3,
          phone: '+12223334444'
        }
      ];
    //END generation of entries=============================================

    console.log(NameFunc(list))
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