// admin.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName: string = 'Admin'; 
  adminPassword: string = '********'; 


  changePassword(newPassword: string): void {

    console.log(`Changing password for ${this.adminName} to ${newPassword}`);
    this.adminPassword = newPassword;
    
  }

  
}
