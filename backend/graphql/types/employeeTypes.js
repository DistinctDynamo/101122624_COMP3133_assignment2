import {GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID, GraphQLNonNull, GraphQLEnumType} from 'graphql'

//const genderEnumType = new GraphQLEnumType({
//    name: 'genderEnum',
//    values: {
//      Male:{
//        value: "Male"
//      },
//      Female:{
//        value: "Female"
//      },
//      Other:{
//        value: "Other"
//      }
//    },
//});

const employeeType = new GraphQLObjectType({
    name: "employee",
    description: "An employee object",
    fields: ()=>({
        id:{type:GraphQLID},
        first_name:{type: new GraphQLNonNull(GraphQLString)},
        last_name:{type: new GraphQLNonNull(GraphQLString)},
        email:{type: new GraphQLNonNull(GraphQLString)},
        gender:{type: new GraphQLNonNull(GraphQLString)},
        designation:{type: new GraphQLNonNull(GraphQLString)},
        salary:{type: new GraphQLNonNull(GraphQLFloat)},
        date_of_joining:{type: GraphQLString},
        department:{type: new GraphQLNonNull(GraphQLString)},
        employee_photo:{type: GraphQLString},
        created_at:{type: GraphQLString},
        updated_at:{type: GraphQLString}
    })
});

export default employeeType;