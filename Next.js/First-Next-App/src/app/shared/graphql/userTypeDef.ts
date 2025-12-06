export const userTypeDefs = `
    type User {
    id: ID!
    email: String!
    password: String!
    username: String!
    }

    type Query {
        users: [User!]!
        oneUser(id: ID!): User!
    }

    type Mutation {
        createUser(username:String!, email:String!, password: String!): User
        loginuser(email:String!, password:String!): User
    }
    `