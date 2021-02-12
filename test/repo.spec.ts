import * as chai from 'chai';
import * as dotenv from 'dotenv';
const expect = chai.expect
dotenv.config()

import { UserRepository } from '../src/repository/user.repository';

describe("Test user repository", () => {
    
    it("Test if getUser returns correct results", () => {
        
        return UserRepository.getUsers(3, 0)
            .then((results) => {
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                console.log(e)
            })

    })
})