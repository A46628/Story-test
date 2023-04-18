
module.exports = function(router, storyServices){

    router.post('/store/createNewUser', createNewUser)
    router.put('/store/updateUser/:idUser',updateUser)
    router.post('/store/createNewOrder/:idUser',createNewOrder)

    router.delete('/store/deleteOrder/:idUser/:idOrder',deleteOrder)
    router.post('store/addProductToOrderById/:idUser/:idOrder',addProductToOrderById)
    router.post('store/addProductToOrderByName/:idUser/:idOrder',addProductToOrderByName)
    router.delete('store/deleteProductById/:idUser/:idOrder',deleteProductById)
    router.delete('store/deleteProductByName/:idUser/:idOrder',deleteProductByName)

    
    router.post('store/User/insertAddresClient/:idUser',insertAddresClient)
    router.put('store/User/updateAddressClient/:idUser',updateAddressClient)

    router.delete('store/User/deleteAddressClient/:idUser',deleteAddressClient)

    router.post('store/orderState/Stated_Paymment/:idUser/:idOrder',Stated_Paymment)
    
    return router



function createNewUser(req,resp){
    //return resp.send('Até aqui está tudo bem ')
    console.log(req.body)
    return storyServices
            .createNewUser(req.body.Nif, req.body.Email, req.body.password,
                           req.body.name, req.body.Number_Phone)
            .then(user => resp.status(200).json(user))
            .catch(error => resp.status(500).json({
                erro: "nada"
            }))
            

}



function updateUser(req,resp){
    return storyServices
    .updateUser(req.params.Nif)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}



function createNewOrder(req,resp){
    return storyServices
            .createNewOrder(Nif_Client)
            .then(order => Promise.resolve(order))
            .catch(error => Promise.reject(error))


}


function deleteOrder(req,resp){
    return storyServices
    .deleteOrder(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}


function addProductToOrderById(req, resp){
    return storyServices
    .addProductToOrderById(id_Order, id_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}


function addProductToOrderByName(req,resp){
    return storyServices
    .addProductToOrderByName(id_Order, name_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))

}

function deleteProductById(req, resp){
    return storyServices
    .deleteProductById(id_Order, id_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))

}


function deleteProductByName(req, resp){
    return storyServices
    .deleteProductByName(id_Order, name_Product)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function insertAddresClient(req,resp){
    return storyServices
    .insertAddresClient(nifClient, road, city, numberDoor, numberFloor)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function updateAddressClient(req,resp){
    return storyServices
    .updateAddressClient(nifClient, road, city, numberDoor, numberFloor)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function deleteAddressClient(req,resp){
    return storyServices
    .deleteAddressClient(nifClient, idAddress)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function Stated_Paymment(req,resp){
    return storyServices
    .Stated_Paymment(id_Order,typePayment)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}


/*
function deleteOrderDelevry(req,resp){
    return storyMen
    .deleteOrderDelevry(id_Order)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allOrder(req,resp){
    return storyMen
    .allOrder(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allOrderPay(req,resp){
    return storyMen
    .allOrderPay(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}

function allorderDelevery(req,resp){
    return storyMen
    .allorderDelevery(Nif_Client)
    .then(order => Promise.resolve(order))
    .catch(error => Promise.reject(error))
}
*/

}