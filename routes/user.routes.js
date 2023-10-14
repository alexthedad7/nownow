import { createUser } from "../controller/user.controller.js"

export default (app) => {
    app.post('/create/user', createUser);
}