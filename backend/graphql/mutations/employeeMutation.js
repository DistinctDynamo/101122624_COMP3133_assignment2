import {GraphQLNonNull, GraphQLID} from 'graphql';

import Employee from '../../models/Employee.js'
import EmployeeType from '../types/employeeTypes.js'
import EmployeeInput from '../inputs/employeeInput.js'

const employeeMutations = {
    addEmployee:{
        type: EmployeeType,
        args: {
            input: { type: new GraphQLNonNull(EmployeeInput) }
        },
        resolve(parent, args) {
            const employee = new Employee({
                first_name: args.input.first_name,
                last_name: args.input.last_name,
                email: args.input.email,
                gender: args.input.gender,
                designation: args.input.designation,
                salary: args.input.salary,
                date_of_joining: args.input.date_of_joining,
                department: args.input.department,
                employee_photo: args.input.employee_photo,
                created_at: args.input.created_at,
                updated_at: args.input.updated_at
            });
            return employee.save();
        }
    },
    updateEmployee:{
        type: EmployeeType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            input: { type: new GraphQLNonNull(EmployeeInput) }
        },
        resolve(parent, args) {
            return Employee.findByIdAndUpdate(args.id, args.input, { new: true });
        }
    },
    deleteEmployee:{
        type: EmployeeType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve(parent, args) {
            return Employee.findByIdAndDelete(args.id);
        }
    }
}


export default employeeMutations;