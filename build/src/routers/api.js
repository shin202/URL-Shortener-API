"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UrlShortenerController_1 = __importDefault(require("../controllers/UrlShortenerController"));
const router = express_1.default.Router();
router.get('/', UrlShortenerController_1.default.index);
router.post('/', UrlShortenerController_1.default.store);
router.get('/:shortUrl', UrlShortenerController_1.default.show);
router.delete('/:shortUrl', UrlShortenerController_1.default.destroy);
module.exports = router;
//# sourceMappingURL=api.js.map