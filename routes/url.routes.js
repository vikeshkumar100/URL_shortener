import express from 'express'
import { shortUrl,findurl,showAnalytics,showAllAnalytics} from '../controllers/url.controllers.js';
import { checkAuth } from '../middlewares/auth.middleware.js';

const router=express.Router();

router.post('/',checkAuth,shortUrl);
router.get('/analytics',checkAuth,showAllAnalytics);
router.get('/analytics/:id',checkAuth,showAnalytics);
router.get('/:id',findurl);

export default router;