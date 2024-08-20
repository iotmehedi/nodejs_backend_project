// require('dotenv').config({ path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path: './env'
})

connectDB();




/*
import express from 'express';
const app = express();
(async () => {
    try { 
      await mongoose.connect(`${process.env.MONGDB_uri}/${DB_NAME}`);
      app.on("error", (error)=> {
        console.log("Error", error);
        throw error;
      })
      app.listen(process.env.Port,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);  // eslint-disable-line no-console
      })
    } catch (e) { 
        console.error("ERROR: " + e.message); 
        throw err
    }
})()*/