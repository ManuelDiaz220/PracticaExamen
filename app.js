import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test1 } from "./backend/controlador/controller.empleados.js";
import { test2 } from "./backend/controlador/controller.gerentes.js";
import { test3 } from "./backend/controlador/controller.productos.js";
import { test4 } from "./backend/controlador/controller.ProductosF.js";
import { test5 } from "./backend/controlador/controller.promociones.js";
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log("funciona")
})
.catch((error) =>{
    console.log("no funciona", error)
})
const app =express();
app.use(cors())
app.listen(4000, () => {
    console.log("todo bien")
})

test1()
test2()
test3()
test4()
test5()