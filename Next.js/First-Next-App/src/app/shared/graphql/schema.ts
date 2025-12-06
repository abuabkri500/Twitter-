import { todoResolvers } from "./todoResolver";
import { todoTypeDefs } from "./todoTypeDef";
import { userResolvers } from "./userResolver";
import { userTypeDefs } from "./userTypeDef";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

export const resolvers = mergeResolvers(
    [
        userResolvers, todoResolvers
    ]
)

export const typeDefs = mergeTypeDefs(
    [
        userTypeDefs, todoTypeDefs
    ]
)






// const allUsers = [
//     { "id": '1', "name": 'Alice', "email": 'alice@gmail.com' },
//     { "id": '2', "name": 'Wonder', "email": 'wonder@gmail.com' },
//     { "id": '3', "name": 'John', "email": 'john@gmail.com' }
// ]

