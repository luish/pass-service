import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import bodyParser from "body-parser";
import BaseRouter from './routes/index'

const port = process.env.PORT || 3000;

// create and setup express app
createConnection().then(async () => {
    const app = express();

    app.use(bodyParser.json());

    app.use('/', BaseRouter);

    // set your test device to use http (in Settings->Developer) 
    app.listen(port, () => {
        console.log(`[SERVER] Running at http://localhost:${port}`);
    });
}).catch(error => console.log("TypeORM connection error: ", error));