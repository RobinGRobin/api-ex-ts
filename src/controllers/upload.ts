import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";
import { registerUpload } from "../services/storage";
import { Storage } from "../interfaces/storage";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const response = await registerUpload(dataToRegister);
        res.send(response);
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};

export { getFile };
