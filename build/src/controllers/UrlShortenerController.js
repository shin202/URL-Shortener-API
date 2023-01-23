"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UrlShortener_1 = __importDefault(require("../models/UrlShortener"));
const ApiResponser_1 = __importDefault(require("../utils/ApiResponser"));
class UrlShortenerController {
    constructor() {
        /**
        * Display listing of urls.
        *
        * @param _req
        * @param res
        * @returns
        */
        this.index = (_req, res) => {
            return UrlShortener_1.default
                .find()
                .then(shortUrls => ApiResponser_1.default.successResponse(res, shortUrls, 'Successfully fetched list of urls.'))
                .catch(err => res.status(500).json({ err }));
        };
        /**
         * Create a new short url.
         *
         * @param req
         * @param res
         * @returns
         */
        this.store = (req, res) => {
            const { originalUrl } = req.body;
            const shortUrl = new UrlShortener_1.default({
                _id: new mongoose_1.default.Types.ObjectId(),
                original_url: originalUrl,
            });
            return shortUrl
                .save()
                .then(shortUrl => ApiResponser_1.default.successCreatedResponse(res, shortUrl))
                .catch(err => res.status(500).json({ err }));
        };
        /**
         * Redirect to the original url.
         *
         * @param req
         * @param res
         * @returns
         */
        this.show = async (req, res) => {
            const shortUrlParam = req.params.shortUrl;
            const shortUrl = await UrlShortener_1.default.findOne({ short_url: shortUrlParam });
            if (!shortUrl)
                return ApiResponser_1.default.notFoundResponse(res);
            shortUrl.visits++;
            shortUrl.save();
            res.redirect(shortUrl.original_url);
        };
        this.destroy = async (req, res) => {
            const shortUrl = await UrlShortener_1.default.findOne({ short_url: req.params.shortUrl });
            if (!shortUrl)
                return ApiResponser_1.default.notFoundResponse(res);
            shortUrl.delete();
            return ApiResponser_1.default.successResponse(res, null, 'Deleted!');
        };
    }
}
exports.default = new UrlShortenerController;
//# sourceMappingURL=UrlShortenerController.js.map