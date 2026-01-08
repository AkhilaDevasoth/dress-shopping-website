const supabase = require('./config/supabaseClient');

const checkProductImages = async () => {
  try {
    console.log('🔍 Checking product images in database...');

    const { data, error } = await supabase
      .from('products')
      .select('id, name, image_url')
      .limit(5);

    if (error) {
      console.error('❌ Error fetching products:', error);
      return;
    }

    console.log('📦 Found products:');
    data.forEach(product => {
      console.log(`- ${product.name}: ${product.image_url}`);
    });

    // Test if URLs are accessible
    console.log('\n🌐 Testing image URL accessibility...');
    for (const product of data) {
      try {
        const response = await fetch(product.image_url, { method: 'HEAD' });
        console.log(`- ${product.name}: ${response.ok ? '✅ Accessible' : '❌ Not accessible'} (${response.status})`);
      } catch (err) {
        console.log(`- ${product.name}: ❌ Error accessing URL - ${err.message}`);
      }
    }

  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
};

checkProductImages();