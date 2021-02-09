import * as dotenv from "dotenv"
dotenv.config();
import { Config, DB } from "./service"

console.log(Config.all())


// DB.query("SELECT * FROM users")
//     .then(results => {
//         console.log(results)
//     }).catch(e => {
//         console.log(e)
//     })