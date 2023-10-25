import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';


interface signUp{
  email:string,
  password: string,
  name:string,
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUp: FormGroup;
  constructor()
  {
    this.signUp=new FormGroup({
  'name': new FormControl(),
  'email': new FormControl(),
  'password': new FormControl(),
  // 'rememberME': new FormControl(),
  
    })
  }


  CreateSignUp() {
    // localStorage.clear();
    // console.log(this.signIn.value)
    const email = this.signUp.value.email;
    const password = this.signUp.value.password;
    const name = this.signUp.value.name;
    const userDetail: signUp = { name:name, email: email, password: password };
    var flag=0;
    const userString = localStorage.getItem('userDetail');
    console.log(userString);
    if (userString === null) {
      localStorage.setItem('userDetail', JSON.stringify([userDetail]));
      alert('Your account has been created!'); 
    } else {
      const users = JSON.parse(userString);
      if (Array.isArray(users)) {
        users.forEach((user: { email: any; password: any; }) => { 
          if (user.email === email && user.password === password) { 
            alert('Account already exists.'); 
            flag=1;
          }
          if (user.email === email && user.password !== password) { 
            alert('Account already exists. Wrong Password!'); 
            flag=1;
          }
        });
  
        if(flag === 0){
          users.push(userDetail);
          localStorage.setItem('userDetail', JSON.stringify(users));
          alert('Your account has been created!'); 
        }
      } else {
        localStorage.setItem('userDetail', JSON.stringify([userDetail]));
        alert('Your account has been created!'); 
      }
    }
    // console.log(localStorage.getItem('userDetail'));
  }

}
