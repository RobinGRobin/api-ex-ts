import { Request, Response, Router } from "express";
import { deleteItem, getItems, getItem, postItem, updateitem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', getItems);
router.get('/:id', logMiddleware, getItem);
router.post('/', postItem);
router.put('/:id', updateitem);
router.delete('/:id', deleteItem);

export { router };