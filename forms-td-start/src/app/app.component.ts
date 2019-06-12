import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('f') signupForm:NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders:string[] = ['male','female'];
  defaultGender = "female";
  
  user = {
    Username: '',
    email:'',
    secretQestion:'',
    answer:'',
    gender:''
  };
  submited:boolean = false;


  suggestUserName() {
    const suggestedName = 'Superuser';



    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret : 'pet',
    //   questionAnswer:'',
    //   gender:'mail'
    // });

    this.signupForm.form.patchValue({
      userData:{
        sername: suggestedName
      }
    });
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submited = true;
    // console.log(this.signupForm);
    this.user.Username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
