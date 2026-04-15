import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { EmployeeForm } from './employee-form/employee-form';
import { Employees } from './employees/employees';

export const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch:'full'},
    {path:'login', title:'login', component:Login},
    {path:'signup', title:'signup', component:Signup},
    {path:'employees', title:'employees', component:Employees},
    {path:'employeeForm', title:'employeeForm', component:EmployeeForm}
];
