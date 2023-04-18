
const storyMen = require('./store-men')

module.exports = function(){

    return{
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
    console.log("Será que está chegando aqui")
    return storyMen
            .createNewUser(Nif, Email, password, name, Number_Phone)
            .then(user => Promise.resolve(user))
            .catch(error => Promise.reject(error))

}


function updateUser(token,Nif, Email, password, name, Number_Phone){
    return storyMen
    .updateUser(token,Nif, Email, password, name, Number_Phone)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}



function createNewOrder(Nif_Client){
    return storyMen
            .createNewOrder(Nif_Client)
            .then(order => Promise.resolve(order))
            .catch(error => Promise.reject(error))


}


function deleteOrder(Nif_Client){
    return storyMen
    .deleteOrder(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}


function addProductToOrderById(id_Order, id_Product){
    return storyMen
    .addProductToOrderById(id_Order, id_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}


function addProductToOrderByName(id_Order, name_Product){
    return storyMen
    .addProductToOrderByName(id_Order, name_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))

}

function deleteProductById(id_Order, id_Product){
    return storyMen
    .deleteProductById(id_Order, id_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))

}


function deleteProductByName(id_Order, name_Product){
    return storyMen
    .deleteProductByName(id_Order, name_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function insertAddresClient(nifClient, road, city, numberDoor, numberFloor){
    return storyMen
    .insertAddresClient(nifClient, road, city, numberDoor, numberFloor)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function updateAddressClient(nifClient, road, city, numberDoor, numberFloor){
    return storyMen
    .updateAddressClient(nifClient, road, city, numberDoor, numberFloor)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function deleteAddressClient(nifClient, idAddress){
    return storyMen
    .deleteAddressClient(nifClient, idAddress)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function Stated_Paymment(id_Order,typePayment){
    return storyMen
    .Stated_Paymment(id_Order,typePayment)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function deleteOrderDelevry(id_Order){
    return storyMen
    .deleteOrderDelevry(id_Order)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allOrder(Nif_Client){
    return storyMen
    .allOrder(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allOrderPay(Nif_Client){
    return storyMen
    .allOrderPay(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allorderDelevery(Nif_Client){
    return storyMen
    .allorderDelevery(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

}