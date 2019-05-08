import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService:ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Server |
        Observable<Server> |
        Promise<Server> {
            console.log("In the Server resolver");
            return this.serversService.getServer(+route.params['id']);
    }
}