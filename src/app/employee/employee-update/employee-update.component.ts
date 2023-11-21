import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  employeeForm: FormGroup;
  employeeId!: number; 

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      });
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const updatedEmployee = this.employeeForm.value;
      this.employeeService.updateEmployee(this.employeeId, updatedEmployee).subscribe(() => {
    
      });
    }
  }
}
