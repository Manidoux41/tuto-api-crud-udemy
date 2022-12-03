import { Router } from "express";
import { addRoom, getTest, postTest } from "../controllers/roomController.js";
import { catchErrors } from "../config/helpers.js";

const router = Router();

router.get('/', (_,res) => {
    res.send('Hello World !')
})

router.get('/test', catchErrors(getTest));

router.post('/test', catchErrors(postTest))

router.post('/room', catchErrors(addRoom))

export default router;