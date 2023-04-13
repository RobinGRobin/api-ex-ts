import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo lo ven las personas con sesión / JWT",
            user: req.user,
        });
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
};

export { getItems };
