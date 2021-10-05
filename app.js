const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const file = require('dotenv');
const resolvers = require('./graphql/resolvers')
const connection = require('./db/connect');
file.config()
// const typeDefs = gql `
//  type Query {
//      hello: String
//  }
// `
// const resolvers = {
//     Query : {
//         hello: ()=>{
//             return "Hello  Malav"; 
//         }
//     }
// }

async function startServer() {
    // connection().then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    const app = express()
    const apolloServer  = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    // customization graphql Path like this
    // apolloServer.applyMiddleware({app:app,path:'/auth'});
    apolloServer.applyMiddleware({app:app});
    connection
    // mongoose.connect('mongodb://localhost:27017/graph',{
    //     useUnifiedTopology : true,
    //     useNewUrlParser: true
    // })
    // console.log('DataBase Connected....')
    // app.use((req,res) =>{
    //     res.send('hello express server')
    // })
    app.listen(4000,()=>{
        console.log('server is running...')
    })
}
startServer()