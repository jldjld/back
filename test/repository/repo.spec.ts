import * as dotenv from "dotenv"

const envPath = __dirname + "../../.env.test"
console.log(envPath)
dotenv.config({path:envPath})

import "mocha"
import * as chai from "chai"
import * as assert from "assert"
const expect = chai.expect

import { UserRepository } from "../../src/repository/user.repository"

describe("Test user repository", () => {
    it("Test if getUsers works", () => {
        UserRepository.getUsers(3, 0)
            .then((results) => {
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                console.log(e)
                assert.fail(e)
            })

    })
})