import * as dotenv from "dotenv"

import "mocha"
import * as chai from "chai"
const expect = chai.expect

import { UserRepository } from "../../src/repository/user.repository"
import { assert } from "chai"

const envPath = __dirname + "../../.env.test"
dotenv.config({path:envPath})

describe("Test user repository", () => {
    it("Test if getUsers works", () => {
        UserRepository.getUsers(3, 0)
            .then((results) => {
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                assert.fail(e)
            })

    })

    it("Test if addUser works", () => {
        // UserRepository.addUser("Toto", "Toto@leHeros.com")
        //     .then((results) => {
        //         expect(results).to.equal(1)
        //     })
        //     .catch(e => {
        //         console.log(e)
        //         assert.fail(e)
        //     })
    })
})