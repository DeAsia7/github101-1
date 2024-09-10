// Mini Database of shopping Kart

let kart = [
   {
    id: 1, 
    name : "Playstation 5", 
    price: 1000, 
    quantity: 1
   }, 
   {
    id: 2, 
    name: "Make Up", 
    price: 5, 
    quantity: 3
   } , 
   {
    id: 3, 
    name: "T Shirts", 
    price: 10, 
    quantity: 10
   }, 
   {
    id: 4, 
    name: "Blue Jeans", 
    price: 12, 
    quantity: 3
   }, 
   {
    id: 5, 
    name: "Socks", 
    price: 1, 
    quantity: 15
   }
]
// Render all the elements into a table

function renderAllElements(){

   let tableLayout = ` <tr> 
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr> `

    for( let i=0; i <kart.length; i++){
        tableLayout += ` <tr> 
                            <td> ${kart[i].name} </td>
                            <td>$${kart[i].price}</td>
                            <td>${kart[i].quantity}</td>
                            <td>$${kart[i].price * kart[i].quantity}</td>
                        </tr> `
    }

    allElements.innerHTML = tableLayout


}