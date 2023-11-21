import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Import your employee service

@Component({
    selector: 'app-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    selectedEmployee: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeeService
    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
          const employeeId = params.get('id');
          if (employeeId) {
              // Parse the employeeId to a number
              const parsedEmployeeId = +employeeId;
  
              // Fetch the selected employee details using your service
              this.employeeService.getEmployeeById(parsedEmployeeId).subscribe(
                  (employee: any) => {
                      this.selectedEmployee = employee;
                  },
                  error => {
                      console.error('Error fetching employee details', error);
                  }
              );
          }
      });
  }
  
    deleteEmployee(): void {
        if (this.selectedEmployee) {
            const employeeId = this.selectedEmployee.id;

            // Call your service to delete the employee
            this.employeeService.deleteEmployee(employeeId).subscribe(
                () => {
                    console.log('Employee deleted successfully');
                    // Optionally, you can navigate to the employee list or perform any other action after deletion
                    this.router.navigate(['/employees']);
                },
                error => {
                    console.error('Error deleting employee', error);
                }
            );
        }
    }
}
