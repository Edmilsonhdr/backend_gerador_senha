const { Router } = require("express");

const gerarRouter = require("./gerarSenhaOffRouter.routes");

const routes = Router();

routes.use("/", gerarRouter);


module.exports = routes;    