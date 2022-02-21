'use strict';
var dbConn = require('./../../config/db_config');

//Usuario object create
var Usuario = function(usuario){
    this.id = usuario.id;
    this.first_name = usuario.first_name;
    this.last_name = usuario.last_name;
    this.email = usuario.email;    
    this.reg_date = new Date();    
};

Usuario.findAll = function (result) {
    dbConn.query("Select * from User", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Usuarios : ', res);
            result(null, res);
        }
    });
};

module.exports= Usuario;

