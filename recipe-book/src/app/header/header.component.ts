import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService, private aouthService: AuthService) { }

    ngOnInit() {
        this.userSub = this.aouthService.user.subscribe(user => {
            // this.isAuthenticated = !user ? false : true;
            this.isAuthenticated = !!user;
            console.log("user" + user);
            console.log("!user" + !user);
            console.log("!!user" + !!user);
        });
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.aouthService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}