import {Schema, model} from "mongoose"

export const esquema1 = new Schema ({
    nombre:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    

})

export const modelo1 = new model ('gerentes', esquema1)
