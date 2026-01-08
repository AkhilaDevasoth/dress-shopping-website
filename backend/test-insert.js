const supabase = require('./config/supabaseClient');

const testInsert = async () => {
  try {
    console.log('🧪 Testing product count...');

    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('❌ Select failed:', error);
    } else {
      console.log('✅ Products in database:', data.length);
      if (data.length > 0) {
        console.log('Sample product:', data[0]);
      }
    }

  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
};

testInsert();