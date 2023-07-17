import { Router } from "express";
import { GrupoController } from "./controllers/GrupoController";
import { ProdutoController } from "./controllers/ProdutoController";

const routes = Router()

routes.put('/product/:id', new ProdutoController().update)
routes.delete('/product/:id', new ProdutoController().delete)
routes.get('/products', new ProdutoController().list)
routes.get('/product/:id', new ProdutoController().listId)
routes.post('/product', new ProdutoController().create)


routes.post('/group', new GrupoController().create)
routes.get('/groups', new GrupoController().list)
routes.get('/group/:id', new GrupoController().listId)


export default routes