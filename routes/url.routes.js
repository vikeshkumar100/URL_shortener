import express from 'express'
import { shortUrl,findurl,showAnalytics,showAllAnalytics} from '../controllers/url.controllers.js';

const router=express.Router();

router.post('/',shortUrl);
router.get('/analytics',showAllAnalytics);
router.get('/analytics/:id',showAnalytics);
router.get('/:id',findurl);

export default router;