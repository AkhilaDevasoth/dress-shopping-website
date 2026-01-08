const supabase = require('./config/supabaseClient');

const testConnection = async () => {
  try {
    console.log('Testing Supabase connection...');

    // Test if we can connect to Supabase
    const { data, error } = await supabase.from('products').select('*').limit(1);

    if (error) {
      console.error('Supabase connection error:', error.message);
      console.log('\n❌ SOLUTION: You need to create the products table in Supabase');
      console.log('1. Go to https://supabase.com/dashboard');
      console.log('2. Select your project');
      console.log('3. Go to SQL Editor');
      console.log('4. Run this SQL:');
      console.log(`
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
      `);
      return;
    }

    console.log('✅ Supabase connection successful!');
    console.log(`Found ${data.length} products in database`);

    if (data.length === 0) {
      console.log('\n⚠️  No products found. Run the seed script:');
      console.log('node seed.js');
    }

  } catch (err) {
    console.error('Error:', err.message);
  }
};

testConnection();