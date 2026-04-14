import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

import User from '../../models/Users.js'
import UserType from '../types/userTypes.js'

const userQueries = {
    login:{
       type: UserType,
       args: { email:{type: new GraphQLNonNull(GraphQLString)}, password: { type: new GraphQLNonNull(GraphQLString) } },
       resolve: async (_, { email, password }) => {
            const user = await User.findOne( {email} )
            const isMatch = await user.isValidPassword(password);

            if (!user) {
            throw new Error('Invalid credentials');
            }
            if (!isMatch) {
            throw new Error('Invalid password');
            }

            return user
       } 
          
    }
}

export default userQueries;