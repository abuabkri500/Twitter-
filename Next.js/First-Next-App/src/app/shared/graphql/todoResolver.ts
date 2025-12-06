import { todoModel } from "../database/model/todo.model"

export const todoResolvers = {
    Query: {
        todos: async (_: any, { id }: { id: string }) => {
            try {
                const allTodo = await todoModel.find()
                return allTodo
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
    },
    Mutation: {
        createTodo: async (
            _: any,
            { title, description }: { title: string; description: string }
        ) => {
            try {
                if (!title || !description) {
                    throw new Error("All fields are required")
                }
                const newTodo = await todoModel.create({ title, description })
                return newTodo
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        },
        deleteTodo: async (_: any, { id }: { id: string }) => {
            try {
                const deleted = await todoModel.findByIdAndDelete(id)
                if (!deleted) throw new Error("Todo not found")
                return deleted
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
    }
}
