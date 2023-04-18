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
    token : "rmkfrfrmfrfmr",
    id_User:2
   
},
{
    Nif :"123456789",
    Email :"carla@gmail.com",
    password : "carla",
    name :"carla",
    Number_Phone : "927678232", // unique fields 
    token : "mkgrmgrlfelmrvtkvr",
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
   
    },

    {
        id_User:3,
        id_Order:2,
        order_Date :"28/10/2024",
   
    },
    {
        id_User:1,
        id_Order:2,
        order_Date :"28/10/2024",
   
    }


]

 nextId = [
    
    {nextid : 1, userId : 1},
    {nextid : 1, userId : 2},
    {nextid : 1, userId : 3}

]



/*
function updateUser(token,Nif, Email, password, name, Number_Phone){
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
       // if (user.some(user => user.Nif === Nif_Client)) return Promise.reject("expected user")
    }

    updateUser("mkgrmgrlfelmrvtkvr")

*/
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



function createNewOrder(token){
        
    return getTokenUser(token)
            .then(user => {
                const newOrder = {
                    id_User:user.id_User,
                    id_Order:getnextId(user.id_User),
                    order_Date :"28/10/2024",
                }
                Orders.push(newOrder)
            })
            .catch(error => {
                
                console.log(error)
            })
    
}

function allOrder(token){
    
    return getTokenUser(token)
            .then(user => {
              const orderResult =  Orders.filter(order => order.id_User === user.id_User)
             
                return orderResult
            }).catch(error => {
                console.log(error)
            })

}

function allOrderPay(token){
    return getTokenUser(token)
            .then(user => {
                const orderResult =  Orders.filter(order => order.id_User === user.id_User)
                orderResult = orderResult.filter(order => order.paymment == true)

                return orderResult
            }).catch(error => {

                console.log(error)
            }
        )

}


function allorderDelevery(token){
    return getTokenUser(token)
    .then(user => {
        const orderResult =  Orders.filter(order => order.id_User === user.id_User)
        orderResult = orderResult.filter(order => order.paymment == true)

        return orderResult
    }).catch(error => {

        console.log(error)
    }
)

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

   /* createNewOrder("mkgrmgrlfelmrvtkvr")
    createNewOrder("mkgrmgrlfelmrvtkvr")
    createNewOrder("mkgrmgrlfelmrvtkvr")
    createNewOrder("mkgrmgrlfelmrvtkvr")
    createNewOrder("rmkfrfrmfrfmr")
    createNewOrder("rmkfrfrmfrfmr")
    createNewOrder("rmkfrfrmfrfmr")
    createNewOrder("rmkfrfrmfrfmr")

    */


    deleteOrder("mkgrmgrlfelmrvtkvr", 1)