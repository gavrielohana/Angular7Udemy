import { Component} from '@angular/core';
import { loggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']

})
export class NewAccountComponent {
  constructor(private loggingService: loggingService,private accountService:AccountService) { 
    this.accountService.statusApdated.subscribe(
      (status:string)=> alert("New status" + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
  }
}
