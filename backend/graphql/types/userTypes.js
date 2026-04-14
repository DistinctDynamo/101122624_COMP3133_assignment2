import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql'

const userType = new GraphQLObjectType({
    name: "user",
    description: "A user object",
    fields: ()=>({
        id:{type:GraphQLID},
        username:{type: new GraphQLNonNull(GraphQLString)},
        email:{type: new GraphQLNonNull(GraphQLString)},
        password:{type: new GraphQLNonNull(GraphQLString)},
        created_at:{type: GraphQLString},
        updated_at:{type: GraphQLString}
    })
});

export default userType;