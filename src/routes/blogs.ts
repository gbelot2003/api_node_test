import { Router } from "express"
import { getBlogs } from "../controllers/blogs";
import { session } from "../middleware/session";

const router = Router();

/**
 * http://localhost:3000/blogs
 */
router.get('/', session, getBlogs)

export { router }