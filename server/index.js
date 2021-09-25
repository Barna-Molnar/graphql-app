const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");



const server = new ApolloServer({
    typeDefs, resolvers, context: () => {
        return {
            exampleKey: "Example String"
        }
    }
})

server.listen().then(({ url }) => {

    console.log(`Your server is running AT ${url} :)`)

})