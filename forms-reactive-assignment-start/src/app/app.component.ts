import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidatorsService } from './custom-validators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];

  forbiddenNames: string[] = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required], this.AsyncCheckForbiddenNames),
      // 'projectName': new FormControl(null, [Validators.required,CustomValidatorsService.invalidProjectName.bind(this)]),
      'projectName': new FormControl(null, Validators.required, CustomValidatorsService.asyncInvalidProjectName ),

      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  // checkForbiddenNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  // AsyncCheckForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value == 'Test') {
  //         resolve({ 'AsyncCheckForbiddenNames': true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500)
  //   });
  //   return promise;
  // }

}
