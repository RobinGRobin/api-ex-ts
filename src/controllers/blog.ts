import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOG');
    }
}

const getItems = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_GET_BLOGS');
    }
}

const updateitem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_UPDATE_BLOG');
    }
}

const postItem = ({ body }:Request, res:Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res,'ERROR_POST_BLOG');
    }
}

const deleteItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,'ERROR_DELETE_ITEM');
    }
}  

export {getItem, getItems, updateitem, postItem, deleteItem};