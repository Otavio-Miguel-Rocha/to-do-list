import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";

@Injectable()
export class UserService {
    loggedUser:User;

    
    public set setLoggedUser(user:User) {
        this.loggedUser = user;
    }
    
    public get getLoggedUser() : User {
        return this.loggedUser;
    }
    

}