const express = require('express');
const multer = require('multer');
const {
  getProducts,
  getProductsByCategory,
  uploadProductImage,
  createProduct
} = require('../controllers/productController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.post('/upload-image', upload.single('image'), uploadProductImage);
router.post('/', createProduct);

// Proxy image route to avoid CORS issues
router.get('/proxy-image', async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL required' });
    }

    const response = await fetch(imageUrl);
    if (!response.ok) {
      return res.status(response.status).send('Image not found');
    }

    const contentType = response.headers.get('content-type');
    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour

    response.body.pipe(res);
  } catch (error) {
    console.error('Image proxy error:', error);
    res.status(500).json({ error: 'Failed to proxy image' });
  }
});

module.exports = router;