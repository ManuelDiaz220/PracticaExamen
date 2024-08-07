import {Schema, model} from "mongoose"

export const esquema2 = new Schema ({
    nombre:{
        type:String
    },
    precioAntiguo:{
        type:String
    },
    precioNuevo:{
        type:String
    }
    

})

export const modelo5 = new model ('Promociones', esquema2)
