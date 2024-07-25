
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from '../signup/signup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  users: signupModel[] = [];
  selectedUser: signupModel | null = null;
  sameNameUsers: signupModel[] = [];
  groupedUsers: { [key: string]: signupModel[] } = {};
  selectedFirstName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    const localUsers = localStorage.getItem('users');
    if (localUsers) {
      this.users = JSON.parse(localUsers);
      this.groupUsersByFirstName();
    } else {
      alert('No users found.');
      this.router.navigate(['/signup'], { queryParams: { activeform: 'signup' } });
    }
  }

  groupUsersByFirstName() {
    this.groupedUsers = this.users.reduce((acc, user) => {
      if (!acc[user.firstname]) {
        acc[user.firstname] = [];
      }
      acc[user.firstname].push(user);
      return acc;
    }, {} as { [key: string]: signupModel[] });
  }

  toggleView(firstname: string) {
    this.selectedFirstName = firstname;
    this.selectedUser = null;
    this.sameNameUsers = this.groupedUsers[firstname] || [];
  }

  backToList() {
    this.selectedUser = null;
    this.sameNameUsers = [];
    this.selectedFirstName = null;
    this.loadUsers(); // Refresh the user list
  }

  shouldShowViewButton(firstname: string): boolean {
    return (this.groupedUsers[firstname] || []).length >= 1;
  }
}



