"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UrlShortener_1 = __importDefault(require("../models/UrlShortener"));
class UrlShortenerController {
    constructor() {
        /**
         * Display listing of URLs.
         *
         * @param req
         * @param res
         * @param next
         */
        this.index = (req, res, next) => {
            return UrlShortener_1.default
                .find()
                .then(shortUrls => res.status(200).json({ shortUrls }))
                .catch(err => res.status(500).json({ err }));
        };
        /**
         * Create a new short URL.
         *
         * @param req
         * @param res
         * @param next
         */
        this.store = (req, res, next) => {
            const { originalUrl } = req.body;
            const shortUrl = new UrlShortener_1.default({
                _id: new mongoose_1.default.Types.ObjectId(),
                originalUrl,
            });
            return shortUrl
                .save()
                .then(shortUrl => res.status(201).json({ shortUrl }))
                .catch(err => res.status(500).json({ err }));
        };
        this.show = async (req, res, next) => {
            const shortUrlParam = req.params.shortUrl;
            const shortUrl = await UrlShortener_1.default.findOne({ shortUrl: shortUrlParam });
            if (!shortUrl)
                return res.status(404).json({ message: 'Not Found' });
            shortUrl.visits++;
            shortUrl.save();
            res.redirect(shortUrl.originalUrl);
        };
    }
}
exports.default = new UrlShortenerController;
//# sourceMappingURL=UrlShortenerController.js.map