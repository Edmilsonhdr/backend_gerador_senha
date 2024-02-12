const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Usar as rotas definidas no arquivo routes.js
app.use('/', routes);

// Definindo a porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
