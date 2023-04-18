const crypto = require('crypto');


user = [{
        Nif :"296884391",
        Email :"pvitorn18@gmail.com",
        password : "paulo120",
        name :"Paulo Tavares",
        Number_Phone : "927678232",
        token: "adnejfbenlfnbjrefn",
        id_User:1
    },
    {
        Nif :"987654321",
        Email :"sofia18@gmail.com",
        password : "sofia",
        name :"carla",
        Number_Phone : "927678232", // unique fields 
        token:"fnejfnefnefienf",
        id_User:2
       
    },
    {
        Nif :"123456789",
        Email :"carla@gmail.com",
        password : "carla",
        name :"carla",
        Number_Phone : "927678232", // unique fields 
        token:"mkmkfefmefeflmblf",
        id_User:3
       
    }
]


Orders = [
    {
        id_User:1,
        id_Order:1,
        order_Date :"28/10/2024",
   
    },

    {
        id_User:2,
        id_Order:1,
        order_Date :"28/10/2024",
   
    },
    {
        id_User:3,
        id_Order:1,
        order_Date :"28/10/2024",
   
    }

]


Product = [
    {
    id_Product :"1",
    name_Product : "Maça",
    description_Of_Product :" Maça para comer ",
    amount_Product :" 10",
    price_Product : "2EUR",
    country_of_manufacture : "Portugal",
    expiration_Date : "28/10/2026",
    id_Order:1,

},
{
    id_Product :"1",
    name_Product : "Maça",
    description_Of_Product :" Maça para comer ",
    amount_Product :" 10",
    price_Product : "2EUR",
    country_of_manufacture : "Portugal",
    expiration_Date : "28/10/2026",
    id_Order:1,


}]

/*
Stated_Paymment : [{
    id_user,
    id_order,
    paymentDate,
    typePayment // Dinheiro ou cartão
}]
*/
/*
AddresClient =[{
    nifClient,
    road,
    city,
    numberDoor,
    numberFloor
}]
*/


/*
orderDelevery:{
    datePaymment,
    id_Order,
    id_User,
    cityDelevery

}
*/

idUser =3
module.exports ={

    deleteOrderDelevry:deleteOrderDelevry,
    allOrder:allOrder,
    allOrderPay:allOrderPay,
    allorderDelevery:allorderDelevery,
    createNewUser:createNewUser,
    updateUser:updateUser,
    createNewOrder:createNewOrder,
    deleteOrder:deleteOrder,
    addProductToOrderById:addProductToOrderById,
    addProductToOrderByName:addProductToOrderByName,
    deleteProductById:deleteProductById,
    deleteProductByName:deleteProductByName,
    insertAddresClient:insertAddresClient, 
    updateAddressClient:updateAddressClient,
    deleteAddressClient:deleteAddressClient,
    Stated_Paymment:Stated_Paymment
}  


function createNewUser(Nif, Email, password, name, Number_Phone){

    if (user.some(user => user.Nif === Nif)) return Promise.reject("expected user")
    if (user.some(user => user.Email === Email)) return Promise.reject("expected user")
    idUser++;
    token = crypto.randomUUID()
    newUser = {
        Nif: Nif,
        Email : Email,
        password: password,
        name : name,
        Number_Phone: Number_Phone,
        token: token,
        idUser : idUser

    }

    user.push(newUser)  
    return Promise.resolve(newUser)
}

function updateUser(token,Nif, Email, password, name, Number_Phone)
{
        const info = user.some(user => user.token === token)
        if (info) {
            
            user = user.filter(user => user.token!== token)
            userUpdate= {
                Nif : Nif,
                Email : Email,
                password : password,
                name : name,
                token : token,
                Number_Phone : Number_Phone
            }
            user.push(userUpdate)
        }else{
            console.log("Usuario não encontrado")
        }
}


function createNewOrder(token){
        
    return getTokenUser(token)
            .then(user => {
                const newOrder = {
                    id_User:user.id_User,
                    id_Order:getnextId(user.id_User),
                    order_Date :"28/10/2024",
                }
                Orders.push(newOrder)

                console.log(Orders)
            })
            .catch(error => {
                
                console.log(error)
                console.log("error creating the new order")
            })
    
}


function deleteOrder(token, id_Order){
    return getTokenUser(token)
           .then(user => {
                ordersWithuser = Orders.filter(order => order.id_User === user.id_User); 
                Orders = Orders.filter(order => order.id_User!== user.id_User)   
                ordersWithuser = ordersWithuser.filter(order => order.id_Order!== id_Order)
                ordersWithuser.forEach(element => {
                    Orders.push(element)
            });
           })
           .catch(error => {
            console.log(error)
           }
           )
}

//c66e1af818aa182d965f523d22c60f21
function addProductToOrderById(id_Order, id_Product){

}


function addProductToOrderByName(id_Order, name_Product){

}

function deleteProductById(id_Order, id_Product){

}


function deleteProductByName(id_Order, name_Product){

}

function insertAddresClient(nifClient, road, city, numberDoor, numberFloor){

}

function updateAddressClient(nifClient, road, city, numberDoor, numberFloor){

}

function deleteAddressClient(nifClient, idAddress){

}

function Stated_Paymment(id_Order,typePayment){

}

function deleteOrderDelevry(id_Order){

}

function allOrder(token){


}

function allOrderPay(Nif_Client){

}

function allorderDelevery(Nif_Client){

}

function getTokenUser(token){
    const userToken = user.find(user=> user.token == token)
    if(!user)  return Promise.reject(errors.NOT_AUTHORIZE())
    return Promise.resolve(userToken)
}



function getnextId(idUser){
    nextIdUser = nextId.find(user=> user.userId == idUser)
    nextId = nextId.filter(user => user.userId!== idUser)

    nextIdUser= {
        nextid : nextIdUser.nextid + 1,
        userId : idUser
    }

    nextId.push(nextIdUser)

    return nextIdUser.nextid;
}

