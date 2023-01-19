import { Document } from "mongoose";
export interface ShortUrl {
    originalUrl: string;
    shortUrl: string;
    visits: number;
    created_at: string | Date;
}
export interface UrlShortenerModel extends ShortUrl, Document {
}
//# sourceMappingURL=Types.d.ts.map