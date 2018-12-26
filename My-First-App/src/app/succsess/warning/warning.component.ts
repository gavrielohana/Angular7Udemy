import { Component } from '@angular/core';

@Component({
    selector:'app-warning',
    templateUrl : 'warning.component.html',
    styles:[`
    p{
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
        border-radius: 15px;
    }
    `]

})
export class WarningComponent{

}