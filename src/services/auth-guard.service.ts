
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.getLoggedUser()) {
          return true;
        } else {
          this.router.navigate(["/Login"]);
          return false;
        }
      }
      //https://consolelog.com.br/como-proteger-rotas-angular-com-guard/
}