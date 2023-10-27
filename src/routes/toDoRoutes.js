import express from "express";
import { deleteTask, getAllTasks, getTaskOnDuration, postTask, updateTask } from "../controller/toDoController";

const routeTask = express.Router();

routeTask.get("/getToDoList/", getAllTasks);
routeTask.post("/addTask", postTask);
routeTask.get("/durationTask/:duration", getTaskOnDuration);
routeTask.put("/updateTask/:id", updateTask);
routeTask.delete("/deleteTask/:id", deleteTask);

export default routeTask;
