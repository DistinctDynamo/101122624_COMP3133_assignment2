import {GraphQLNonNull, GraphQLID} from 'graphql';

import User from '../../models/Users.js'
import UserType from '../types/userTypes.js'
import UserInput from '../inputs/userInput.js'

const userMutation = {
    createUser: {
        type: UserType,
        args: {
            input: { type: new GraphQLNonNull(UserInput) }
        },
        resolve(parent, args) {
            const user = new User({
                username: args.input.username,
                email: args.input.email,
                password: args.input.password,
                created_at: args.input.created_at,
                updated_at: args.input.updated_at
            });
            return user.save();
        }
    }
}

export default userMutation