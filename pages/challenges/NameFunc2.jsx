export default function Test(){

function NameFunc2(c, o){
    // Write your code here
    console.log(c,o); //show input variables

    c.forEach(element => {
        const listOrders = o.filter((order) => order.customerId === element.id);
        element["orders"] = listOrders;
    });

    return c
}

    //generation of entries=================================================
    const customers = [
        {
          id: 1,
          name: 'John Doe'
        },
        {
          id: 2,
          name: 'Jane Doe'
        },
        {
          id: 3,
          name: 'Richard Roe'
        },
      ]
      
      const orders = [
        {
          id: 1,
          customerId: 1,
          product: 'M1 MacBook Air',
          price: 999,
        },
        {
          id: 2,
          customerId: 2,
          product: 'M1 MacBook Pro',
          price: 1299,
        },
        {
          id: 3,
          customerId: 1,
          product: 'Dell XPS 9310',
          price: 1199,
        },
      ]
    //END generation of entries=============================================

    console.log(NameFunc2(customers, orders))
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