const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller');

// Retrieve all employees
router.get('/', usuarioController.findAll);

module.exports = router