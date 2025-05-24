import { Document } from "mongoose";

interface Album extends Document {
    name: string;
    thumbnailUrl?: string;
    releaseDate?: Date;
}