import * as chai from "chai";
import "mocha";


const expect = chai.expect

const data = {
    id: 2,
    name: "Toto",
    surname: "Tot le héros",
    email: "toto@test.fr"
}
const user = new User(data);

describe("Test User Model", () => {

    it("verify if user model is valid", () => {
        expect(user.id).to.equal(2),
        expect(user.name).to.equal("Toto"),
        expect(user).not.to.have.property("surname")
    })
})