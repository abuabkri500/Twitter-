import { userModel } from "../database/model/user.model";

export const userResolvers = {
  Query: {
    users: async () => {
      try {
        const allUsers = await userModel.find();
        return allUsers;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error?.message);
        }
      }
    },
    oneUser: async (_: any, { id }: { id: string }) => {
      try {
        const existingUser = await userModel.findById(id);
        if (!existingUser) {
          throw new Error("User not found");
        }
        return existingUser;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error?.message);
        }
      }
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      {
        username,
        email,
        password,
      }: { username: string; email: string; password: string }
    ) => {
      try {
        if (!username || !email || !password) {
          throw new Error("All fields are required");
        }
        const newUser = await userModel.create({ username, email, password });
        return newUser;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error?.message);
        }
      }
    },
    loginuser: async ( _: any,{ email, password }: { email: string; password: string }) => {
    try {
      if (!email || !password) {
        throw new Error("All fields are mandatory");
      }
      const existingUser = await userModel.findOne({ email });
      if (existingUser && existingUser.password == password) {
        return existingUser;
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error?.message);
      }
    }
  },
  },
  
};
