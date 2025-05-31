import { Router } from "express";
import albumController from "../controller/album.controller";

const albumRouter = Router()

albumRouter.post("/new", albumController.newAlbum)
albumRouter.put("/edit/:albumId", albumController.editAlbum)
albumRouter.get("/list", albumController.listAlbums)
albumRouter.get("/details", albumController.getAlbumDetail)

export default albumRouter;