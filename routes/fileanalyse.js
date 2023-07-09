import { Router } from "express";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("upfile"), (req, res, next) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "Missing required file attachment: upfile" });
  }

  const { originalname, mimetype, size } = req.file;

  res.json({
    name: originalname,
    type: mimetype,
    size,
  });
});

export default router;
