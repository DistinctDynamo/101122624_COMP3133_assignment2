import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserQueries from './queries/userQueries.js'
import UserMutation from './mutations/userMutation.js'
import EmployeeQueries from './queries/employeeQueries.js'
import EmployeeMutation from './mutations/employeeMutation.js'

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...EmployeeQueries,
        ...UserQueries
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...EmployeeMutation,
        ...UserMutation
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default schema;