export const todoTypeDefs = `
    type Todo {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
    }

    type Query {
        todos: [Todo!]!
    }

    type Mutation {
        createTodo(title: String!, description:String!):Todo!
        deleteTodo(id: ID!): Todo!
    }
    `