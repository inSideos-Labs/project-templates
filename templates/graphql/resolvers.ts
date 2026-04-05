export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: (_: any, { id }: { id: string }) => ({ id, name: 'User' }),
  },
};