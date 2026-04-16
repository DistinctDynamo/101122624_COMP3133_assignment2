import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees implements OnInit{
  employees: any[] = []

  isUpdating = false;
  selectedEmployeeId: string | null = null;
  error: any;

  private readonly employeeService=inject(EmployeeService)

  employeeForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(''),
    designation: new FormControl('',Validators.required),
    salary: new FormControl(0,Validators.required),
    department: new FormControl('',Validators.required)
  });


  ngOnInit(): void {
      this.loadEmployees()
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    if (this.isUpdating) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  loadEmployees(){
     this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log('Employees:', data);
        this.employees = data;
      },
      error: (err) => {
        this.error = err;
      },
    });
  }

   addEmployee() {
    const employee = this.employeeForm.value;

    this.employeeService.addEmployee(employee).subscribe(() => {
      this.loadEmployees();
      this.resetForm();
    });
  }

   updateEmployee() {
    if (!this.selectedEmployeeId) return;

    this.employeeService
      .updateEmployee(this.selectedEmployeeId, this.employeeForm.value)
      .subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
  }

  deleteEmployee(id: string) {
    if (!confirm('Are you sure you want to delete?')) return;
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  selectEmployee(employee: any) {
    this.isUpdating = true;
    this.selectedEmployeeId = employee._id;

    this.employeeForm.patchValue({
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      gender: employee.gender,
      designation: employee.designation,
      salary: employee.salary,
      department: employee.department
    });
  }

   resetForm() {
    this.employeeForm.reset();
    this.isUpdating = false;
    this.selectedEmployeeId = null;
  }
}
