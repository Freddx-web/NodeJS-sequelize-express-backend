const express = require('express');
const Sequelize = require('sequelize');
const app = express()

// Parametros de Connection
const sequelize = new Sequelize('data_base_1', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
});

// Models
const UsersModel = sequelize.define('users',{

    "id":{type:Sequelize.INTEGER, primaryKey: true},
    "name": Sequelize.STRING,
    "email": Sequelize.STRING,
    "password": Sequelize.STRING
    
});

sequelize.autheticate()
    .then(()=>{
        console.log('Connexion a Msyql ');
    })
    .catch(error => {
        console.log('Error Connexion MySql'+error)
    })



// Fuente_ https://www.youtube.com/watch?v=im7THL67z0c&ab_channel=Inform%C3%A1ticaDP
/*


https://sequelize.org/


*/





app.listen(3000, () => {
  console.log('Server up in http:localhost:3000')
})

