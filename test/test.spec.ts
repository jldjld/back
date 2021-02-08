import * as chai from "chai";
import "mocha";

const expect = chai.expect

describe("My first test", () => {

    it("1 is equal to 1", () => {
        expect(1).to.equal(1)
    })
})