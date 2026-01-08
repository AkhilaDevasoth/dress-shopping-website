const supabase = require('../config/supabaseClient');

// Get all products
const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Upload product image to Supabase Storage
const uploadProductImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;
    const fileName = `${Date.now()}-${file.originalname}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false
      });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    res.json({ imageUrl: publicUrl });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, category, description, image_url } = req.body;

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name,
          price: parseFloat(price),
          category,
          description,
          image_url
        }
      ])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  uploadProductImage,
  createProduct
};