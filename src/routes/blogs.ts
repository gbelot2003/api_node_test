import { Router, Response, Request } from "express"

const router = Router();

/**
 * http://localhost:3000/blogs
 */
router.get('/', (req:Request, res:Response) => {
    res.send({data: "AQUI VAN LOS MODELOS"})
})

export {router}