import {GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

import EmployeeType from '../types/employeeTypes.js'
import Employee from '../../models/Employee.js'


const employeeQueries = {
  employees: {
    type: new GraphQLList(EmployeeType),
    resolve: async () => await Employee.find()
  },
  employee: {
    type: EmployeeType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { id }) => await Employee.findById(id)
  },
  EmployeesByDepartment: {
    type: new GraphQLList(EmployeeType),
    args: { department: { type: new GraphQLNonNull(GraphQLString) } },
    resolve: async (_, { department }) => await Employee.find( {department} )
  }
};

export default employeeQueries;
