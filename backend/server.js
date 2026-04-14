import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './graphql/schema.js';

import { ApolloServer }  from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

const app = express()
const PORT = 5000

const connectDB = async() => {
    try{
        console.log(`Attempting to connect to DB`);
        
        const DB_NAME = "comp3133_101122624_assignment1"
        const DB_USER_NAME = 'nguyensteven578_db_user'
        const DB_PASSWORD = 'KipuXKRBlZistryc' 
        const CLUSTER_ID = 'qnimjux'
        const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@clustercomp3123.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=clustercomp3123`

        mongoose.connect(DB_CONNECTION).then( () => {
            console.log(`MongoDB connected`)
        }).catch( (err) => {
            console.log(`Error while connecting to MongoDB : ${JSON.stringify(err)}`)
        });
    }catch(error){
        console.log(`Unable to connect to DB : ${error.message}`);
    }
}

async function startServer() {
    const server = new ApolloServer({
      schema
    });

    await server.start();

    app.use(
      '/graphql', 
      cors(),
      express.json(),
      expressMiddleware(server)
    );

    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
      try {
          connectDB()
      } catch (error) {
        console.log(``);
      }
    })
}

startServer();