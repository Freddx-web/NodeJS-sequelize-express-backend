/**
 * 
 *  FUENTE: https://sequelize.org/docs/v6/getting-started/#testing-the-connection
 *  7:49 / 8:51
 */

  // Module
  /*
  const express = require('express');
  const Sequelize = require('sequelize');

  */
  import express from "express"
  //import cors from "cors";
  import Sequelize from "sequelize"

  // Settings
  const app = express();
  //app.use(cors());
  app.set("port", 4000);

  // Parametros de Connection 
  const sequelize = new Sequelize('data_base_1', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
  }); 

  // Models
  const UsersModel = sequelize.define('users', {

    "id":{type:Sequelize.INTEGER, primaryKey: true},
    "name": Sequelize.STRING,
    "email": Sequelize.STRING,
    "password": Sequelize.STRING
    
  });

  // authenticate
  sequelize.authenticate()
    .then(() => {
      console.log('Conexion Sequelize');
    })
    .catch(error => {
      console.log('Error Server')
    })

    // Export App 
export default app;