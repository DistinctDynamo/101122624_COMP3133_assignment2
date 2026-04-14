import {GraphQLInputObjectType, GraphQLString, GraphQLNonNull} from 'graphql'

const userInput = new GraphQLInputObjectType({
    name: "userInput",
    fields: ()=>({
        username:{type: new GraphQLNonNull(GraphQLString)},
        email:{type: new GraphQLNonNull(GraphQLString)},
        password:{type: new GraphQLNonNull(GraphQLString)},
        created_at:{type: GraphQLString},
        updated_at:{type: GraphQLString}
    })
});

export default userInput;