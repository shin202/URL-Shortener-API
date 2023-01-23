import { Request, Response } from "express";
import mongoose from "mongoose";
import UrlShortener from "../models/UrlShortener";
import ApiResponser from "../utils/ApiResponser";

class UrlShortenerController {
    /**
    * Display listing of urls.
    * 
    * @param _req 
    * @param res 
    * @returns 
    */
    index = (_req: Request, res: Response) => {
        return UrlShortener
            .find()
            .then(shortUrls => ApiResponser.successResponse(res, shortUrls, 'Successfully fetched list of urls.'))
            .catch(err => res.status(500).json({ err }));
    }

    /**
     * Create a new short url.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    store = (req: Request, res: Response) => {
        const { originalUrl } = req.body;

        const shortUrl = new UrlShortener({
            _id: new mongoose.Types.ObjectId(),
            original_url: originalUrl,
        });

        return shortUrl
            .save()
            .then(shortUrl => ApiResponser.successCreatedResponse(res, shortUrl))
            .catch(err => res.status(500).json({ err }));

    }

    /**
     * Redirect to the original url.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    show = async (req: Request, res: Response) => {
        const shortUrlParam = req.params.shortUrl;
        const shortUrl = await UrlShortener.findOne({ short_url: shortUrlParam });

        if (!shortUrl) return ApiResponser.notFoundResponse(res);

        shortUrl.visits++;
        shortUrl.save();
        res.redirect(shortUrl.original_url);
    }

    destroy = async (req: Request, res: Response) => {
        const shortUrl = await UrlShortener.findOne({ short_url: req.params.shortUrl });

        if (!shortUrl) return ApiResponser.notFoundResponse(res);

        shortUrl.delete();
        return ApiResponser.successResponse(res, null, 'Deleted!');
    }
}

export default new UrlShortenerController;

