
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}
    //state 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.getLoggedUser()) {
          return true;
        } else {
          this.router.navigate(["/Login"]);
          return false;
        }
      }
}