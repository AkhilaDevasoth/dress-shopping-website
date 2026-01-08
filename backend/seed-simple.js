const supabase = require('./config/supabaseClient');

const seedProducts = async () => {
  console.log('🌱 Starting to seed products...');
  const products = [
    // Home/Featured Products
   { name: 'Ruby Charm Party Dress', price: 89.99, category: 'home', description: 'Elegant ruby red party dress perfect for evening celebrations', image_url: 'https://picsum.photos/300/400?random=1' },
{ name: 'Sky Blue Casual Day Dress', price: 59.99, category: 'home', description: 'Lightweight sky blue dress ideal for daily casual wear', image_url: 'https://picsum.photos/300/400?random=2' },
{ name: 'Midnight Black Evening Gown', price: 129.99, category: 'home', description: 'Classic black evening gown for formal occasions', image_url: 'https://picsum.photos/300/400?random=3' },
{ name: 'Blossom Floral Maxi Dress', price: 79.99, category: 'home', description: 'Flowy floral maxi dress with a graceful summer look', image_url: 'https://picsum.photos/300/400?random=4' },
{ name: 'Ivory Bridal Elegance Gown', price: 199.99, category: 'home', description: 'Premium ivory bridal gown with elegant detailing', image_url: 'https://picsum.photos/300/400?random=5' },
{ name: 'Summer Stripe Breeze Dress', price: 49.99, category: 'home', description: 'Breathable striped summer dress for warm weather comfort', image_url: 'https://picsum.photos/300/400?random=6' },
{ name: 'Retro Polka Grace Dress', price: 69.99, category: 'home', description: 'Vintage-inspired polka dot dress with retro charm', image_url: 'https://picsum.photos/300/400?random=7' },
{ name: 'Designer Saree Collection', price: 99.99, category: 'home', description: 'Elegant designer saree suitable for festive occasions', image_url: 'https://picsum.photos/300/400?random=8' },
{ name: 'Kanjivaram Silk Saree', price: 79.99, category: 'home', description: 'Traditional Kanjivaram silk saree with rich patterns', image_url: 'https://picsum.photos/300/400?random=9' },
{ name: 'Traditional Ethnic Dress', price: 89.99, category: 'home', description: 'Classic traditional ethnic dress for cultural events', image_url: 'https://picsum.photos/300/400?random=10' },
{ name: 'Women Casual Shirt', price: 54.99, category: 'home', description: 'Stylish casual shirt for women with a modern fit', image_url: 'https://picsum.photos/300/400?random=11' },
{ name: 'Pure Silk Luxe Dress', price: 149.99, category: 'home', description: 'Premium pure silk dress with a luxurious finish', image_url: 'https://picsum.photos/300/400?random=12' },
{ name: 'Kids Casual Dress', price: 94.99, category: 'home', description: 'Comfortable casual wear dress designed for kids', image_url: 'https://picsum.photos/300/400?random=13' },
{ name: 'Kids Birthday Dress', price: 74.99, category: 'home', description: 'Cute and colorful dress perfect for kids birthday parties', image_url: 'https://picsum.photos/300/400?random=14' },
{ name: 'Kids Party Gown', price: 159.99, category: 'home', description: 'Elegant party gown designed specially for kids', image_url: 'https://picsum.photos/300/400?random=15' },
{ name: 'Casual Hoodie', price: 64.99, category: 'home', description: 'Warm and comfortable hoodie for everyday wear', image_url: 'https://picsum.photos/300/400?random=16' },
{ name: 'Men Formal Shirt', price: 139.99, category: 'home', description: 'Premium formal shirt for men with a tailored look', image_url: 'https://picsum.photos/300/400?random=17' },
{ name: 'Minimalist Linen Day Dress', price: 69.99, category: 'home', description: 'Minimal linen dress designed for relaxed daytime wear', image_url: 'https://picsum.photos/300/400?random=18' },


    // Menswear
    { name: 'Classic Suit', price: 149.99, category: 'mens', description: 'Elegant classic suit suitable for formal and business occasions', image_url: 'https://picsum.photos/300/400?random=19' },
{ name: 'Casual Shirt', price: 39.99, category: 'mens', description: 'Comfortable casual shirt perfect for everyday wear', image_url: 'https://picsum.photos/300/400?random=20' },
{ name: 'Jeans', price: 59.99, category: 'mens', description: 'Classic denim jeans with a modern comfortable fit', image_url: 'https://picsum.photos/300/400?random=21' },
{ name: 'Leather Jacket', price: 199.99, category: 'mens', description: 'Premium leather jacket for a bold and stylish look', image_url: 'https://picsum.photos/300/400?random=22' },
{ name: 'Sweater', price: 79.99, category: 'mens', description: 'Warm and cozy sweater ideal for cool weather', image_url: 'https://picsum.photos/300/400?random=23' },
{ name: 'Trousers', price: 49.99, category: 'mens', description: 'Smart casual trousers suitable for office and daily wear', image_url: 'https://picsum.photos/300/400?random=24' },


    // Womenswear
    { name: 'Elegant Red Dress', price: 89.99, category: 'womens', description: 'Stunning elegant red dress perfect for parties and special occasions', image_url: 'https://picsum.photos/300/400?random=25' },
{ name: 'Casual Blue Sundress', price: 59.99, category: 'womens', description: 'Light and breezy blue sundress ideal for casual daytime wear', image_url: 'https://picsum.photos/300/400?random=26' },
{ name: 'Black Evening Gown', price: 129.99, category: 'womens', description: 'Elegant black evening gown designed for formal events', image_url: 'https://picsum.photos/300/400?random=27' },
{ name: 'Floral Maxi Dress', price: 79.99, category: 'womens', description: 'Flowy floral maxi dress with a feminine and graceful look', image_url: 'https://picsum.photos/300/400?random=28' },
{ name: 'White Wedding Dress', price: 199.99, category: 'womens', description: 'Elegant white wedding dress with timeless bridal appeal', image_url: 'https://picsum.photos/300/400?random=29' },
{ name: 'Striped Summer Dress', price: 49.99, category: 'womens', description: 'Comfortable striped summer dress perfect for warm weather', image_url: 'https://picsum.photos/300/400?random=30' },
{ name: 'Vintage Polka Dot Dress', price: 69.99, category: 'womens', description: 'Retro-inspired polka dot dress with vintage charm', image_url: 'https://picsum.photos/300/400?random=31' },
{ name: 'Chic Little Black Dress', price: 99.99, category: 'womens', description: 'Chic little black dress suitable for modern evening outings', image_url: 'https://picsum.photos/300/400?random=32' },
{ name: 'Bohemian Flowy Dress', price: 79.99, category: 'womens', description: 'Bohemian-style flowy dress with a relaxed artistic vibe', image_url: 'https://picsum.photos/300/400?random=33' },
{ name: 'Classic A-Line Dress', price: 89.99, category: 'womens', description: 'Classic A-line dress offering a flattering elegant silhouette', image_url: 'https://picsum.photos/300/400?random=34' },
{ name: 'Sporty Athletic Dress', price: 54.99, category: 'womens', description: 'Sporty athletic dress designed for active and casual wear', image_url: 'https://picsum.photos/300/400?random=35' },
{ name: 'Luxury Silk Dress', price: 149.99, category: 'womens', description: 'Luxury silk dress with premium fabric and elegant finish', image_url: 'https://picsum.photos/300/400?random=36' },

    // Kidswear
    { name: 'Cute T-Shirt', price: 19.99, category: 'kids', description: 'Soft and cute t-shirt perfect for kids everyday wear', image_url: 'https://picsum.photos/300/400?random=37' },
{ name: 'Playful Shorts', price: 24.99, category: 'kids', description: 'Comfortable playful shorts ideal for active kids', image_url: 'https://picsum.photos/300/400?random=38' },
{ name: 'Colorful Dress', price: 29.99, category: 'kids', description: 'Bright and colorful dress designed for fun occasions', image_url: 'https://picsum.photos/300/400?random=39' },
{ name: 'Comfy Hoodie', price: 39.99, category: 'kids', description: 'Warm and comfy hoodie suitable for casual outings', image_url: 'https://picsum.photos/300/400?random=40' },
{ name: 'Fun Sneakers', price: 49.99, category: 'kids', description: 'Lightweight fun sneakers perfect for kids daily activities', image_url: 'https://picsum.photos/300/400?random=41' },
{ name: 'Adorable Pajamas', price: 34.99, category: 'kids', description: 'Soft and adorable pajamas for a comfortable sleep', image_url: 'https://picsum.photos/300/400?random=42' }
  ];
  try {
    console.log(`📦 Attempting to insert ${products.length} products...`);

    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (error) {
      console.error('❌ Error seeding products:', error);
      console.log('\n🔧 Troubleshooting:');
      console.log('1. Make sure the products table exists with correct columns');
      console.log('2. Run the SQL from create-table.sql in Supabase dashboard');
      console.log('3. Check that you have proper permissions');
      return;
    }

    console.log(`✅ Successfully seeded ${data.length} products!`);
    console.log('📊 Products by category:');
    const categoryCount = {};
    data.forEach(product => {
      categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    });
    Object.entries(categoryCount).forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} products`);
    });

  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
};

seedProducts();