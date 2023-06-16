
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { UserServiceService } from '../user.service.service';
import { UserServiceService } from '../user.service.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

 users: any[] = [];
currentPage: number = 1;
  itemsPerPage: number = 8;
   selectedUser: any;
  isEditFormOpen: boolean = false;
  // constructor(private  UserServiceService: UserService) { }
  constructor( private userService: UserServiceService) { }


  ngOnInit(): void {
    this.loadUsers();
  }

loadUsers(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);
    this.loadUsers(); // Refresh the user list
  }


    editUser(user: any): void {
    this.selectedUser = { ...user }; // Create a copy of the selected user object
    this.isEditFormOpen = true;
  }

  cancelEdit(): void {
    this.isEditFormOpen = false;
  }

  saveChanges(): void {
    // Update the user data in the user list
    const index = this.users.findIndex((user) => user.id === this.selectedUser.id);
    if (index !== -1) {
      this.users[index] = this.selectedUser;
      // Close the edit form
      this.isEditFormOpen = false;
    }
  }
  getPaginationRange(): number[] {
  const pageCount = Math.ceil(this.users.length / this.itemsPerPage);
  return Array.from({ length: pageCount }, (_, index) => index + 1);
}

getPaginatedUsers(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.users.slice(startIndex, startIndex + this.itemsPerPage);
}

changePage(page: number): void {
  this.currentPage = page;
}
  

  nextPage(): void {
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
getUserIndex(user: any): number {
  return this.users.indexOf(user);
}
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }



}
  
  // loadUsers(): void {
  //   this.userService.getUsers().subscribe(
  //     response => {
  //       this.users = response;
  //     },
  //     error => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }
  //  deleteUser(userId: number): void {
  //   this.userService.deleteUser(userId).subscribe(
  //     response => {
  //       console.log('User deleted successfully:', response);
  //       this.loadUsers(); // Refresh the user list
  //     },
  //     error => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }


// loadUsers(): void {
  //   this.userService.getUsers().subscribe(
  //     response => {
  //       this.users = response.map((user: any) => ({
  //         name: user.name,
  //         email: user.email,
  //         gender: user.gender,
  //         status: user.status
  //       }));
  //     },
  //     error => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  // }
  //   users: any[] = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers(): void {
//     const apiUrl = 'https://gorest.co.in/public/v2/users';
//     this.http.get<any[]>(apiUrl).subscribe(
//       response => {
//         this.users = response.map(user =>({
//           name: user.name,
//           email: user.email,
//           gender: user.gender,
//           status: user.status
//         }));
//       },
//       error => {
//         console.log('An error occurred:', error);
//       }
//     );
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-adduser',
//   templateUrl: './adduser.component.html',
//   styleUrls: ['./adduser.component.css']
// })
// export class AdduserComponent implements OnInit {
//   // users: any[] = [];
//     users: any;
  
  
//  constructor(private http: HttpClient) { }

//   ngOnInit(): void {
    
//   }

 
//   loadUsers() {
//     const apiUrl = 'https://gorest.co.in/public/v2/users';
//     this.http.get<any>(apiUrl).subscribe(
//       response => {
//         this.users = response.data;
//       },
//       error => {
//         console.log('An error occurred:', error);
//       }
//     );
//   }

// }