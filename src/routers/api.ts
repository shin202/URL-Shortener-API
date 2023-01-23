import express from 'express';
import UrlShortenerController from '../controllers/UrlShortenerController';

const router = express.Router();

router.get('/', UrlShortenerController.index);
router.post('/', UrlShortenerController.store);
router.get('/:shortUrl', UrlShortenerController.show);
router.delete('/:shortUrl', UrlShortenerController.destroy);

export = router;