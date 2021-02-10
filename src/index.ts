import * as dotenv from "dotenv"
dotenv.config({path:__dirname + "/../.env"});
import { UserRepository } from "./repository/user.repository"

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req :any, res: any) => {
    res.json({ message: "Welcome to my Api." });
});

app.get("/status", (req: any, res: any) => {
    res(200).json("Ok")
})

app.get("/users", (req: any,res: any) => {
    const limit = req.query.limit

    UserRepository.getUsers(limit)
        .then((users: any) => {
            res.json({users})
        })
        .catch(e => {
            res.json(500, e.toString())
        })
})

app.post("/users", (req: any, res: any) => {
    const name = req.query.name
    const email = req.query.email

    UserRepository.addUser(name, email)
        .then((response: any) => {
            res.json({response})
        })
        .catch(e => {
            res.json(500, e.toString())
        })
})



// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
