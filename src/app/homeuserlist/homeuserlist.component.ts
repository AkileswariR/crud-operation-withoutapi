import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { Router } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../user.service.service';

@Component({
  selector: 'app-homeuserlist',
  templateUrl: './homeuserlist.component.html',
  styleUrls: ['./homeuserlist.component.css']
})

export class HomeuserlistComponent {
 
  register = new FormGroup({
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  
  constructor( private userService: UserServiceService) { }


  ngOnInit(): void {
  }

 

onSubmit(): void {
    if (this.register.valid) {
      const user = {
        name: this.register.get('name')?.value,
        gender: this.register.get('gender')?.value,
        email: this.register.get('email')?.value,
        status: this.register.get('status')?.value
      };

      this.userService.addUser(user);
      console.log('Data posted successfully:', user);
      this.register.reset(); // Reset the form
    }
  }
  
}
 // register = new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   gender: new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required]),
  //   status: new FormControl('',[Validators.required])
  // });

  // constructor(private http: HttpClient) { }
  

  // onSubmit(): void {
  //   if (this.register.valid) {
  //     const apiUrl ='https://gorest.co.in/public/v2/users';
  //     const postData = {
  //       name: this.register.get('name')?.value,
  //       gender: this.register.get('gender')?.value,
  //       email: this.register.get('email')?.value,
  //       status: this.register.get('status')?.value
  //     };

  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer 92f2a9893acc663ca821cbacd90a89605c02054bbce88a009aa959ddb052c29e'
  //     });

  //     this.http.post(apiUrl, postData, { headers }).subscribe(
  //       response => {
  //         console.log('Data posted successfully:', response);
           
  //         // Handle success response here
  //       },
  //       error => {
  //         console.log('An error occurred:', error);
  //         // Handle error response here
  //       }
  //     );
  //   }
  // }
   // onSubmit(): void {
  //   if (this.register.valid) {
  //     const user = {
  //       name: this.register.get('name')?.value,
  //       gender: this.register.get('gender')?.value,
  //       email: this.register.get('email')?.value,
  //       status: this.register.get('status')?.value
  //     };

  //     this.userService.addUser(user).subscribe(
  //       response => {
  //         console.log('Data posted successfully:', response);
          
  //       },
  //       error => {
  //         console.log('An error occurred:', error);
  //       }
  //     );
  //   }
  // }