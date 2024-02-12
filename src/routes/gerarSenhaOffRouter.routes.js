const express = require('express');
const BcryptController = require('../controllers/BcryptController');

const router = express.Router();
const bcryptController = new BcryptController();

// Rota para criar hash de senha
router.post("/", bcryptController.hashPassword);

module.exports = router;
