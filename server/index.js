import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'
import DefaultData from './default.js'
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';


const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

dotenv.config();
app.use('/',Router);
const PORT =8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`server is running  on ${PORT}`));
DefaultData();

