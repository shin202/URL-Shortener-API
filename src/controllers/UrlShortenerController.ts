import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import UrlShortener from "../models/UrlShortener";

class UrlShortenerController {
    /**
     * Display listing of URLs.
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    index = (req: Request, res: Response, next: NextFunction) => {
        return UrlShortener
            .find()
            .then(shortUrls => res.status(200).json({ shortUrls }))
            .catch(err => res.status(500).json({ err }));
    }

    /**
     * Create a new short URL.
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    store = (req: Request, res: Response, next: NextFunction) => {
        const { originalUrl } = req.body;

        const shortUrl = new UrlShortener({
            _id: new mongoose.Types.ObjectId(),
            originalUrl,
        });

        return shortUrl
            .save()
            .then(shortUrl => res.status(201).json({ shortUrl }))
            .catch(err => res.status(500).json({ err }));

    }

    show = async (req: Request, res: Response, next: NextFunction) => {
        const shortUrlParam = req.params.shortUrl;
        const shortUrl = await UrlShortener.findOne({ shortUrl: shortUrlParam });

        if (!shortUrl) return res.status(404).json({ message: 'Not Found' });

        shortUrl.visits++;
        shortUrl.save();
        res.redirect(shortUrl.originalUrl);
    }
}

export default new UrlShortenerController;

