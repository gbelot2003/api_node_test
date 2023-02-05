import { Router, Response, Request } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router();

/**
 * GET
 * /item/
 */
router.get("/", getItems)

/**
 * GET
 * /item/?id
 */
router.get("/:id", getItem)

/**
 * POST
 * /item
 */
router.post("/", postItem)

/**
 * PUT
 * /item/?id
 */
router.put("/:id", updateItem)

/**
 * DELETE
 * /item/?id
 */
router.delete("/:id", deleteItem)

export { router }