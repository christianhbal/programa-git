console.clear();
import express from "express";

const PORT=3000;
const expressApp= express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.get("/cuenta/:idcuenta/:idinventado", (req,res) => {
    console.log(req.params);
    res.send("Tu cuenta personal");
});

expressApp.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`); 
});
