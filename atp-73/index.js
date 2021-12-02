
import  Express from "express";
import bodyParser from "body-parser";
import ClienteApi from "./api/ClienteApi.js";

const api = Express();
api.use(bodyParser.json());
api.listen(3000, ()=>console.log('Ta on!'));
api.use('/api/cliente', ClienteApi);