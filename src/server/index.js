import express from "express";
import {PORT} from "../config/config.js";
import morgan from "morgan";
import {mongoosedb} from "../db/mongoose.js";
import router from "../routes/routes.js";
import cors from "cors"
const app = express()

async function main(){

app.set("port", process.env.PORT || 4000)
app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

 await mongoosedb()

app.use(router)
app.listen(app.get("port"),()=>{

   console.log("estas conectado en el puerto",app.get("port"))
})

}
main()