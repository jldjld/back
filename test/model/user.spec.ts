
import * as chai from "chai";
import "mocha";
import { User} from "../../src/models/User"; 

const expect = chai.expect


const data = {
    id: 12,
    name: "Toto",
    surname: "Toto le héros",
    email: "toto@test.fr"
}
const user = new User(data);

describe("Test User Model", () => {

    it("Check if user model is valid", () => {
        expect(user.id).to.equal(12),
        expect(user.name).to.equal("Toto"),
        expect(user).not.to.have.property("surname")
    })
})