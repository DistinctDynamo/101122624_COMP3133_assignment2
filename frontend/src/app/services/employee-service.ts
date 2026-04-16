import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import {GET_EMPLOYEES, GET_EMPLOYEE_BY_DEPARTMENT, GET_EMPLOYEE_BY_ID, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from '../graphql/employee.queries'

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
private readonly apollo = inject(Apollo)

getEmployees(): Observable<any[]> {
    return this.apollo
      .watchQuery<any>({ query: GET_EMPLOYEES })
      .valueChanges.pipe(
        map((res) => {
          console.log('Fetched Employees:', res);
          return res?.data?.employees || [];
        })
      );
  }

getEmployeeById(id: string): Observable<any> {
    return this.apollo
      .query<any>({
        query: GET_EMPLOYEE_BY_ID,
        variables: { EmployeeId: id },
      })
      .pipe(
        map((res) => {
          return res.data.employee;
        })
      );
  }

getEmployeeByDepartment(department: string): Observable<any> {
    return this.apollo
      .query<any>({
        query: GET_EMPLOYEE_BY_DEPARTMENT,
        variables: { EmployeeDepartment: department },
      })
      .pipe(
        map((res) => {
          return res.data.employee;
        })
      );
  }

   addEmployee(employee: any): Observable<any> {
    return this.apollo
      .mutate({
        mutation: ADD_EMPLOYEE,
        variables: {
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,  
          gender: employee.gender,
          designation: employee.designation,
          salary: employee.salary,
          department: employee.department,
        },
        refetchQueries: [{ query: GET_EMPLOYEES }],
      })
      .pipe(
        map((res: any) => res.data.createEmployee),
      );
  }

updateEmployee(id: string, employee: any): Observable<any> {
    return this.apollo
      .mutate({
        mutation: UPDATE_EMPLOYEE,
        variables: {
          updateEmployeeId: id,
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,  
          gender: employee.gender,
          designation: employee.designation,
          salary: employee.salary,
          department: employee.department,
        },
        refetchQueries: [{ query: GET_EMPLOYEES }],
      })
      .pipe(
        map((res: any) => res.data.updateEmployee)
      );
  }

   deleteEmployee(id: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: DELETE_EMPLOYEE,
        variables: { deleteStudentId: id },
        refetchQueries: [{ query: GET_EMPLOYEES }],
      })
      .pipe(
        map((res: any) => res.data.deleteEmployee)
      );
  }
}
