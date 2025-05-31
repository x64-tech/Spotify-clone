import { Request, Response, NextFunction } from "express";
import { Album } from "../type/album";
import AlbumModel from "../model/album.model";
import apiResponse from "../utils/response.util";

const albumController = {
    newAlbum: async (req: Request, res: Response, _: NextFunction) => {
        // todo: Process the thumbnail file
        const data: Album = req.body;``
        if (data.name == "")
            return res.status(400).json(apiResponse(false, "album name is required"))

        const newAlbum = await AlbumModel.create(data)
        return res.status(201).json(apiResponse<Album>(true, undefined, newAlbum))
    },
    editAlbum: async (req: Request, res: Response) => {
        // todo: Process the thumbnail file
        const { albumId } = req.params;
        const data: Album = req.body;
        if (data.name == "")
            return res.status(400).json(apiResponse(false, "album name is required"))

        const newAlbum = await AlbumModel.findByIdAndUpdate(albumId, { $set: data }, { new: true })
            .lean().exec()
        return res.status(201).json(apiResponse<Album>(true, undefined, newAlbum as Album))
    },
    listAlbums: async (req: Request, res: Response) => {
        const limit = req.query.limit
        const page = req.query.page
        const albumListQuery = AlbumModel.find({})
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit))
            .lean()
            .exec()

        const albumCountQuery = AlbumModel.countDocuments()

        const [albums, count] = await Promise.all([albumListQuery, albumCountQuery])

        return res.json(200)
            .json(apiResponse(true, undefined, {
                albums,
                pagiation: {
                    totalPages: Math.ceil(count / Number(limit)),
                    current: page
                }
            }))
    },
    getAlbumDetail: async (req: Request, res: Response) => {
        const { albumId } = req.query;
        const album = await AlbumModel.findById(albumId)
            .lean()

        return res.status(200)
            .json(apiResponse(true, undefined, album))
    }

}
export default albumController;