'use strict';

const Usuario = require('../models/usuario.model');

exports.findAll = function(req, res) {    
    Usuario.findAll(function(err, usuario) {        
        if (err)
        res.send(err);
        // console.log('res', usuario);        
        res.render('pages/index', {
            data: usuario
        });        
    });
};


// exports.findAll = function(req, res) {    
//     Usuario.findAll(function(err, usuario) {        
//         if (err)
//         res.send(err);
//         console.log('res', usuario);        
//         res.send(usuario);        
//     });
// };