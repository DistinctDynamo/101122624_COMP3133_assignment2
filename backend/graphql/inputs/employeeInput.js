import {GraphQLInputObjectType, GraphQLString, GraphQLFloat, GraphQLNonNull} from 'graphql'

const employeeInput = new GraphQLInputObjectType({
    name: "employeeInput",
    fields: ()=>({
        first_name:{type: new GraphQLNonNull(GraphQLString)},
        last_name:{type: new GraphQLNonNull(GraphQLString)},
        email:{type: new GraphQLNonNull(GraphQLString)},
        gender:{type: new GraphQLNonNull(GraphQLString)},
        designation:{type: new GraphQLNonNull(GraphQLString)},
        salary:{type:new GraphQLNonNull(GraphQLFloat)},
        date_of_joining:{type: GraphQLString},
        department:{type: new GraphQLNonNull(GraphQLString)},
        employee_photo:{type: GraphQLString},
        created_at:{type: GraphQLString},
        updated_at:{type: GraphQLString}
    })
});

export default employeeInput;