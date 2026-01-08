const supabase = require('./config/supabaseClient');

const seedProducts = async () => {
  const products = [
    // Home page products (mixed categories)
    { name: 'Ruby Charm Party Dress', price: 89.99, category: 'womens', description: 'Elegant party dress', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZVtPNNwa7ZBMSQimvFkjYp3HFY038GzAGQ&s' },
    { name: 'Classic Suit', price: 149.99, category: 'mens', description: 'Professional suit', image_url: 'https://manyavar.scene7.com/is/image/manyavar/TWS0094_306-Dark+Blue_401.24924_16-09-2024-22-01:375x530?&dpr=on,2' },
    { name: 'Kids Casual Dress', price: 94.99, category: 'kids', description: 'Casual kids dress', image_url: 'https://www.littlecheer.com/cdn/shop/products/littlecheer-07-may-220820_7fc6588d-824e-4aa7-8fd2-567551315a3a_600x.jpg?v=1677001437' },

    // Women's products
    { name: 'Sky Blue Casual Day Dress', price: 59.99, category: 'womens', description: 'Casual day dress', image_url: 'https://m.media-amazon.com/images/I/618Nc8GHqZL._AC_UY1100_.jpg' },
    { name: 'Midnight Black Evening Gown', price: 129.99, category: 'womens', description: 'Evening gown', image_url: 'https://manyavar.scene7.com/is/image/manyavar/CPSH353DV-310_30-05-2024-13-20:650x900?&dpr=on,2' },
    { name: 'Blossom Floral Maxi Dress', price: 79.99, category: 'womens', description: 'Floral maxi dress', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxWDTWbmWRjGEvEKi4qs7D7g5MgZkJcAnxg&s' },
    { name: 'Ivory Bridal Elegance Gown', price: 199.99, category: 'womens', description: 'Bridal gown', image_url: 'https://i.pinimg.com/736x/78/f7/72/78f7722301631f66967706a8913d5313.jpg' },
    { name: 'Summer Stripe Breeze Dress', price: 49.99, category: 'womens', description: 'Summer dress', image_url: 'https://cdn.mos.cms.futurecdn.net/MQEoifyuSXG6hcKLjtGybi.jpg' },
    { name: 'Retro Polka Grace Dress', price: 69.99, category: 'womens', description: 'Polka dot dress', image_url: 'https://m.media-amazon.com/images/I/61gAitF3b4L._AC_UY1100_.jpg' },
    { name: 'Sarees', price: 99.99, category: 'womens', description: 'Traditional saree', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nl20XONKjE-ZdZbYxLAPyNbnh4Au1LP2lg&s' },
    { name: 'Kanjivaram Kanchipuram', price: 79.99, category: 'womens', description: 'Silk saree', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6betVFPV892T583sIFBsNv0Ztyil-eia0MA&s' },
    { name: 'Traditional Dress', price: 89.99, category: 'womens', description: 'Traditional wear', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN0LL-1mldcNoxH4b6HsH7YoPqCKNCIueHg&s' },
    { name: 'Shirts for Women', price: 54.99, category: 'womens', description: 'Casual shirt', image_url: 'https://imagescdn.allensolly.com/img/app/product/3/39909619-18323325.jpg?auto=format&w=390' },
    { name: 'Pure Silk Luxe Dress', price: 149.99, category: 'womens', description: 'Silk dress', image_url: 'https://img.faballey.com/images/Product/XLH01111Z/d3.jpg' },
    { name: 'Minimalist Linen Day Dress', price: 69.99, category: 'womens', description: 'Linen dress', image_url: 'https://visibleartshop.com/cdn/shop/products/DSC_4850.jpg?v=1742897230&width=1445' },

    // Men's products
    { name: 'Casual Shirt', price: 39.99, category: 'mens', description: 'Casual shirt', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_gJDPouVOhRI_5oGz_H0dngKUSoseIQb-A&s' },
    { name: 'Jeans', price: 59.99, category: 'mens', description: 'Denim jeans', image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Leather Jacket', price: 199.99, category: 'mens', description: 'Leather jacket', image_url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sweater', price: 79.99, category: 'mens', description: 'Wool sweater', image_url: 'https://m.media-amazon.com/images/I/71TmRAyNnrL._AC_UY1100_.jpg' },
    { name: 'Trousers', price: 49.99, category: 'mens', description: 'Formal trousers', image_url: 'https://assets.ajio.com/medias/sys_master/root/20241109/veEh/672e6853f9b8ef490b0ff364/-473Wx593H-700595679-brown-MODEL.jpg' },
    { name: 'Shirts for Men', price: 139.99, category: 'mens', description: 'Formal shirt', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ciKBExwL9x7JsdH0HWQ_PDCIsbvcudLtBg&s' },

    // Kids products
    { name: 'Kids Birthday Dress', price: 74.99, category: 'kids', description: 'Birthday dress', image_url: 'https://m.media-amazon.com/images/I/71OPp34Xv4L._AC_UY1100_.jpg' },
    { name: 'Kids Party Gown', price: 159.99, category: 'kids', description: 'Party gown', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeOOPSeSv1laGwoQUtzVByKqvqV-4V4SXig&s' },
    { name: 'Hoodies', price: 64.99, category: 'kids', description: 'Kids hoodie', image_url: 'https://m.media-amazon.com/images/I/61OSK3YjfTL._AC_UY1100_.jpg' },
    { name: 'Cute T-Shirt', price: 19.99, category: 'kids', description: 'Kids t-shirt', image_url: 'https://m.media-amazon.com/images/I/51XifJWOOqL._AC_UY350_.jpg' },
    { name: 'Playful Shorts', price: 24.99, category: 'kids', description: 'Kids shorts', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq423IXIcHL0WiGBSujUxaSI2R40w3NPgHQ&s' },
    { name: 'Colorful Dress', price: 29.99, category: 'kids', description: 'Colorful dress', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBxbrVbJF9Gtm8eo-R3OnTZbmYWFGOFRkVg&s' },
    { name: 'Comfy Hoodie', price: 39.99, category: 'kids', description: 'Comfortable hoodie', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGX0YWwoyETw7bFmTJoOgjdfQOslG74GiLuA&s' },
    { name: 'Fun Sneakers', price: 49.99, category: 'kids', description: 'Kids sneakers', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Iu9H-fLdUEx8pRkaNX0r8Jcb4dVLViLPFw&s' },
    { name: 'Adorable Pajamas', price: 34.99, category: 'kids', description: 'Kids pajamas', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqskYNdvwLQ2EEfAhNU7b2o7NmmWeWN5ZDQ&s' }
  ];

  try {
    const { data, error } = await supabase
      .from('products')
      .insert(products);

    if (error) {
      console.error('Error seeding products:', error);
    } else {
      console.log('Products seeded successfully:', data);
    }
  } catch (err) {
    console.error('Error:', err);
  }
};

seedProducts();