import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 private users: any[] = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', gender: 'Male', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', gender: 'Female', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', gender: 'Male', status: 'Active' },
    { id: 4, name: 'User 4', email: 'user4@example.com', gender: 'Female', status: 'Active' },
       { id: 5, name: 'User 5', email: 'user5@example.com', gender: 'Male', status: 'Inactive' },
   { id: 6, name: 'User 6', email: 'user6@example.com', gender: 'Female', status: 'Active' },
         { id: 7, name: 'User 7', email: 'user7@example.com', gender: 'Male', status: 'Active' },
        { id: 8, name: 'User 8', email: 'user8@example.com', gender: 'Female', status: 'Inactive' },
        { id: 9, name: 'User 9', email: 'user9@example.com', gender: 'Male', status: 'Active' },
        { id: 10, name: 'User 10', email: 'user10@example.com', gender: 'Female', status: 'Active' },
        { id: 11, name: 'User 11', email: 'user11@example.com', gender: 'Male', status: 'Inactive' }
  ];
  
constructor(){}
 
  
  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }

  deleteUser(userId: number) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}


