console.clear();
import express from "express";
import dotenv from "dotenv";
import {USERS_BBDD} from "./bbdd.js";

dotenv.config();

const PORT=2000;
const expressApp= express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.get("/account/:guid", (req,res) => {
    const user= USERS_BBDD.find(user => user.guid === req.params.guid);

    if(!user) res.status(404).send();

    res.send(user);
});

expressApp.post("/account", (req,res) => {

});

expressApp.patch("/account", (req,res) => {

});

expressApp.delete("/account", (req,res) => {

});


expressApp.get("/cuenta/:idcuenta/:idinventado", (req,res) => {
    console.log(req.params);
    res.send("Tu cuenta personal");
});

expressApp.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`); 
});
