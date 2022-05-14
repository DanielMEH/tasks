import {Router} from "express"
import {getsTasks,putTasks,postTasks, DeleteTasks,getTasks } from "../controllers/tasks.controllers.js"
const router = Router();


router.get("/products",getsTasks);

router.post("/products",postTasks);

router.put("/products/:id",putTasks );

router.delete("/products/:id", DeleteTasks);

router.get("/products/:id",getTasks);

export default router;