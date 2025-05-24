import { Document, ObjectId } from "mongoose";
import { Album } from "./album";

interface Track extends Document {
    title: string;
    album: Album | ObjectId;
    singer: string?;
    lyricist: string?;
    thumbnailUrl: string?;
    fileUrl: stringl̥;
}