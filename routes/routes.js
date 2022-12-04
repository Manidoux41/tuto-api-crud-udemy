import { Router } from "express";
import { addRoom, deleteRoom, getOneRoom, getRooms, getTest, postTest, updateRoom } from "../controllers/roomController.js";
import { catchErrors } from "../config/helpers.js";

const router = Router();

router.get('/', (_,res) => {
    res.send('Hello World !')
})

router.get('/test', catchErrors(getTest));
router.post('/test', catchErrors(postTest));


router.post('/room', catchErrors(addRoom));
router.get('/rooms', catchErrors(getRooms));
router.get('/room/:id', catchErrors(getOneRoom));
router.patch('/room/:id', catchErrors(updateRoom));
router.delete('/room/:id', catchErrors(deleteRoom))

export default router;