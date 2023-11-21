

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {
  employeeId!: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
    });
  }

  onDelete() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(() => {
      // Handle success, e.g., navigate to the employee list
    });
  }
}
