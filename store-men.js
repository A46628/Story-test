
user = [{
        Nif :"296884391",
        Email :"pvitorn18@gmail.com",
        password : "paulo120",
        name :"Paulo Tavares",
        Number_Phone : "927678232",
        id_User:1
    },
    {
        Nif :"987654321",
        Email :"sofia18@gmail.com",
        password : "sofia",
        name :"carla",
        Number_Phone : "927678232", // unique fields 
        id_User:2
       
    },
    {
        Nif :"123456789",
        Email :"carla@gmail.com",
        password : "carla",
        name :"carla",
        Number_Phone : "927678232", // unique fields 
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


Stated_Paymment : [{
    id_order,
    paymentDate,
    typePayment // Dinheiro ou cartão
}]

AddresClient =[{
    nifClient,
    road,
    city,
    numberDoor,
    numberFloor
}]



orderDelevery:{
    datePaymment,
    id_Order,
    id_User,
    cityDelevery

}

function deleteOrderDelevry(id_Order){

}

function allOrder(Nif_Client){

}

function allOrderPay(Nif_Client){

}

function allorderDelevery(Nif_Client){

}


function createNewUser(Nif, Email, password, name, Number_Phone){
    newUser = {
        Nif: Nif,
        Email : Email,
        password: password,
        name : name,
        Number_Phone: Number_Phone
    }

    user.push(newUser)  
    return Promise.resolve(newUser)
}

function updateUser(Nif_Client){

}



function createNewOrder(Nif_Client){

    newOrder = {
        Nif_Client: Nif_Client
        
    }
}


function deleteOrder(Nif_Client){

}


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




