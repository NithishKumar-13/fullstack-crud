import { GraphQLList } from "graphql";
import { UserType } from '../TypeDefs/User'
const { User } = require('../../../models')
 
export const GET_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await User.findAll()
    }
}