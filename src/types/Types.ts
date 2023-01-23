import { Document } from "mongoose";

export interface ShortUrl {
    original_url: string,
    short_url: string,
    visits: number,
    created_at: string|Date,
};

export interface UrlShortenerModel extends ShortUrl, Document {};