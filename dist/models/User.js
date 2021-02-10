"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.id = null;
        this.name = null;
        this.email = null;
        this.id = data['id'];
        this.name = data['name'];
        this.email = data['email'];
    }
}
exports.User = User;
