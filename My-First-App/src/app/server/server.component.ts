import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online {
        color:white;
    }
    `]
})
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getServerStatus(): string {
        return this.serverStatus;

    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }


    setStyle()
    {
        //return this.styleObjectOnline;
        return this.serverStatus==='online'? this.styleObjectOnline:this.styleObjectOffline;
    }

    styleObjectOnline: Object = {
        'padding': '20px',
        'background-color': 'palegreen',
        'border': '0.5px solid green',
        'border-radius': '15px'
    };

    styleObjectOffline: Object = {
        'padding': '20px',
        'background-color': 'mistyrose',
        'border': '0.5px solid red',
        'border-radius': '15px'
    };

}


