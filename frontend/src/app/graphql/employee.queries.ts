import { gql } from "apollo-angular";

const GET_EMPLOYEES = gql`
  query Employees {
      employees {
      _id
        first_name
        last_name
        email
        gender
        designation
        salary
        department
      }
    }
`
const GET_EMPLOYEE_BY_ID = gql`
query Employee($employeeId: ID!) {
    employee(id: $employeeId) {
      _id
     first_name
     last_name
     email
     gender
     designation
     salary
     department
    }
  }
`
const ADD_EMPLOYEE = gql`
  mutation CreateEmployee($first_name: String!, $last_name: String!, $email: String!, $gender: String, $designation: String!, $salary: Float!, $department: String!) {
    createEmployee(first_name: $first_name, last_name: $last_name, email: $email, gender: $gender, designation: $designation, salary: $salary, department: $department) {
      _id
      first_name
     last_name
     email
     gender
     designation
     salary
     department
    }
  }
`
const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($updateEmployeeId: ID!, $first_name: String!, $last_name: String!, $email: String!, $gender: String, $designation: String!, $salary: Float!, $department: String!) {
    updateEmployee(id: $updateEmployeeId, first_name: $first_name, last_name: $last_name, email: $email, gender: $gender, designation: $designation, salary: $salary, department: $department) {
      _id
      first_name
     last_name
     email
     gender
     designation
     salary
     department
    }
  }
`
const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($deleteEmployeeId: ID!) {
    deleteEmployee(id: $deleteEmployeeId) {
      _id
       first_name
     last_name
     email
     gender
     designation
     salary
     department
    }
  }
`

export {  GET_EMPLOYEES, GET_EMPLOYEE_BY_ID, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE}