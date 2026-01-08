const supabase = require('./config/supabaseClient');

const clearProducts = async () => {
  try {
    console.log('🗑️ Deleting all products from database...');

    const { data, error } = await supabase
      .from('products')
      .delete()
      .neq('id', 0); // This will delete all rows since id is never 0

    if (error) {
      console.error('❌ Error deleting products:', error);
    } else {
      console.log('✅ All products deleted successfully');
      console.log('Deleted products:', data);
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err);
  }
};

clearProducts();