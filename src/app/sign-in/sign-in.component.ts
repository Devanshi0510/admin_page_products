import { Component} from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

interface signIn{
  email:string,
  password: string,
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
signIn: FormGroup;
constructor()
{
  this.signIn=new FormGroup({
'email': new FormControl(),
'password': new FormControl(),
// 'rememberME': new FormControl(),

  })
}

CreateSignIn() {
  // localStorage.clear();
  // console.log(this.signIn.value)
  const email = this.signIn.value.email;
  const password = this.signIn.value.password;
  const userDetail: signIn = { email: email, password: password };
  var flag=0;
  const userString = localStorage.getItem('userDetail');
  console.log(userString);
  if (userString === null) {
    alert('Account not created! Sign Up'); 
  } else {
    const users = JSON.parse(userString);
    if (Array.isArray(users)) {
      users.forEach((user: { email: any; password: any; }) => { 
        if (user.email === email && user.password === password) { 
          alert('Authentication Successfull'); 
          flag=1;
        }
        if (user.email === email && user.password !== password) { 
          alert('Wrong Password! Try Again');
          flag=1;
        }
      });
    } 
  }
      if(flag === 0){
      alert('Account not created! Sign Up'); 
    }
  // console.log(localStorage.getItem('userDetail'));
}

}
