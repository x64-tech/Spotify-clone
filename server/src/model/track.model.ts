import { model, Model, Schema, Types } from "mongoose";
import { Track } from "../type/track";

export const trackSchema = new Schema<Track>({
    title: {
        type: String,
        required: true
    },
    album: {
        type: Types.ObjectId,
        ref: "Album"
    },
    singer: String,
    lyricist: String,
    thumbnailUrl: String,
    fileUrl: {
        type: String,
        required: true
    }
})

const TrackModel: Model<Track> = model("Track", trackSchema)
export default TrackModel
