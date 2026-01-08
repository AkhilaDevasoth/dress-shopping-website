const supabase = require('./config/supabaseClient');

const checkProductCount = async () => {
  try {
    console.log('🔍 Checking total product count...');

    // Get total count
    const { count, error } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('❌ Error getting count:', error);
      return;
    }

    console.log(`✅ Total products in database: ${count}`);

    if (count > 0) {
      // Get sample products by category
      const categories = ['womens', 'mens', 'kids'];
      for (const category of categories) {
        const { data, error: catError } = await supabase
          .from('products')
          .select('name, category')
          .eq('category', category)
          .limit(2);

        if (!catError && data.length > 0) {
          console.log(`📦 ${category}: ${data.length > 1 ? data.length + '+' : data.length} products`);
        }
      }
    }

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

checkProductCount();