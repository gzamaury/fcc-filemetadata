import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('upfile'), (req, res, next) => {
  
  console.log(JSON.stringify(req.file));
});

export default router;
