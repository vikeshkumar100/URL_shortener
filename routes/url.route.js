import express from 'express'
import { shortUrl,findurl,showAnalytics,showAllAnalytics} from '../controllers/url.controller.js';

const router=express.Router();

router.post('/url',shortUrl);
router.get('/:id',findurl);
router.get('/url/analytics/:id',showAnalytics);
router.get('/url/analytics',showAllAnalytics);

export default router;