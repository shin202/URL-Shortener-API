import mongoose, { Schema } from "mongoose";
import shortid from 'shortid';
import { UrlShortenerModel } from "../types/Types";

const UrlShortenerSchema = new Schema({
    originalUrl: { type: String,  required: true },
    shortUrl: { type: String, required: true, default: shortid.generate },
    visits: { type: Number, required: true, default: 0 },
    created_at: { type: Date, required: false, default: Date.now() },
});

export default mongoose.model<UrlShortenerModel>('UrlShortener', UrlShortenerSchema);