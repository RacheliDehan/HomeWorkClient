import { Component } from '@angular/core';
import { UsersService, CreateUserRequest } from '../users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})

export class UserComponent {
  usersList: any[] = []//list 
  name: string = ""
  email: string = ""

  constructor(private usersService: UsersService) {
    //get
    this.usersService.getUsers().subscribe(
      {
        next: (data) => {
          this.usersList = data
        },
        error: (err) => {
          this.usersList = []
        }
      }
    );
  }
  //add- POST
  addUser(): void {
    const user: CreateUserRequest = {
      name: this.name,
      email: this.email
    };

    this.usersService.createUser(user).subscribe({
      next: res => {
        console.log('Success:', res)
        this.usersService.getUsers().subscribe(data => {
          this.usersList = data;
        });
        // איפוס 
        this.name = '';
        this.email = '';
      },
          error: err => console.error('Error:', err)
      });

  }
}
