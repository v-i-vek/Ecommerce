import * as user from "../service/user.service.js";

export async function addUser(){
    try {
        await user.addUser()

    } catch (error) {
        console.error("error while executing addUser()",error)
    }

}