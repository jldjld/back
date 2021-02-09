import { DB } from "../service";
import { User } from "../models/User"

class UserRepositoryService {
    getUsers(limit: number = 10, offset: number = 0): Promise<User[]> {
        const queryString = `SELECT id, name, email FROM users LIMIT ${limit} OFFSET ${offset}`;
        return (new Promise((resolve, reject) => {
            DB.query(queryString)
                .then((results: Array<any>) => {
                    resolve(results.map(row => new User(row)))
                })
                .catch(e => {
                    console.log(e)
                    reject(e)
                })
        })
    )}
}

export const UserRepository = new UserRepositoryService();
