import { GraphQLString, GraphQLInt, GraphQLID } from "graphql";
import { UserType } from "../TypeDefs/User";
const { User } = require('../../../models')

export const CREATE_USER = {
    type: UserType,
    args: {
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    },
    async resolve(parent: any, args: any) {
        const { firstName, lastName, email, age } = args
        await User.create({
            firstName,
            lastName,
            email,
            age
        })
        return args
    }
}

export const DELETE_USER = {
    type: UserType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        const { id } = args
        await User.destroy({ where: { id }})
    }
}

export const UPDATE_USER = {
    type: UserType,
    args: {
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        const { firstName, lastName, email, age, id } = args
        const user = await User.findOne({ where: { id } })
        const updatedUser = {...user, firstName, lastName, email, age }
        await User.update(updatedUser, { where: { id } })
        return args
    }
}