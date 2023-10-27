//  importing dependences
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// importing routes
import routeTask from "./routes/toDoRoutes";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// configure swagger for documentation
const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'toDo APIs Documentation',
            version : '1.0.0'
        },
        
        servers :[{
            url: 'http://localhost:3300/',
        }],
        security: [
            {
              BearerAuth: [],
            },
          ],
          components: {
            securitySchemes: {
              BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              },
            },
        }
    },
    apis : [`src/documentation/*.js`], //  Determining documentation file
}

const swaggerSpec = swaggerJSDoc(options);

app.get("/",(req,res)=>{
    return res.status(200).json({
        Status : 200,
        APIOwner : "AKIMANA",
        Message : "To Do API Is On Set",

    }) 
})
// set APIs
app.use("/todo/documentation/",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use("/cohort/todo/", routeTask)
export default app;