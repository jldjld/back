"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const service_1 = require("../service");
const User_1 = require("../models/User");
class UserRepositoryService {
    getUsers(limit = 10, offset = 0) {
        const queryString = `SELECT id, name, email FROM users LIMIT ${limit} OFFSET ${offset}`;
        return (new Promise((resolve, reject) => {
            service_1.DB.query(queryString)
                .then((results) => {
                resolve(results.map(row => new User_1.User(row)));
            })
                .catch(e => {
                console.log(e);
                reject(e);
            });
        }));
    }
    addUser(name, email) {
        const queryString = `INSERT INTO users (name, email) VALUES (${name}, ${email});`;
        return (new Promise((resolve, reject) => {
            service_1.DB.query(queryString)
                .then((results) => {
                resolve(results);
            })
                .catch(e => {
                reject(e);
            });
        }));
    }
}
exports.UserRepository = new UserRepositoryService();
