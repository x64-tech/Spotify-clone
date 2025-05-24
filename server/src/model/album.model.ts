import { model, Model, Schema } from "mongoose";
import { Album } from "../type/album";

export const albumSchema = new Schema<Album>({
    name: {
        type: String,
        required: true
    },
    releaseDate: Date,
    thumbnailUrl: String
})

const AlbumModel: Model<Album> = model("Album", albumSchema)
export default AlbumModel;