const crypto = require('crypto');



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




var mysql = require('mysql2');

var connection = mysql.createConnection({   
    host: 'localhost',  
    user: 'root',  
    password: '1234',  
    database: 'test'
})


connection.connect(function(err) {
    if(!!err){
        console.error('Unable to connect to the database:', err);
    }else{
        console.log('Connection has been established successfully.');
    }
})




/*
  Id integer,
  name varchar(30) NOT NULL,
  NIF integer unique,
  email varchar(30) unique,
  password varchar(30),
  phone_number integer,
  PRIMARY KEY(Id)

*/

function createNewUser(Nif, Email, password, name, Number_Phone){
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO Customer (Id, name, NIF, email, password, phone_number) 
            VALUES (8, 'Paulo Tavares', 296884391, 'pvitorn18@gmail.com', 'paulo012', 927678232);`,
            function(err, results, fields) {
                if (err) {
                    reject(err);
                } else {
                    console.log("dados inseridos com sucesso");
                    console.log(results);
                    resolve(results);
                }
            }
        );
    });
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

