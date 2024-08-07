import {Schema, model} from "mongoose"

export const esquema = new Schema ({
    Nombre:{
        type:String
    },
    Precio:{
        type:String
    }

})

export const modelo2 = new model ('productos', esquema)
