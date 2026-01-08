const supabase = require('./config/supabaseClient');

const checkTableStructure = async () => {
  try {
    console.log('🔍 Checking Supabase table structure...');

    // Try to get table info
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(1);

    if (error) {
      if (error.message.includes('relation "public.products" does not exist')) {
        console.log('\n❌ TABLE DOES NOT EXIST');
        console.log('📋 SOLUTION: Create the products table in Supabase');
        console.log('1. Go to https://supabase.com/dashboard');
        console.log('2. Select your project');
        console.log('3. Go to SQL Editor');
        console.log('4. Copy and paste the SQL from create-table.sql');
        console.log('5. Click Run');
        return false;
      } else if (error.message.includes('column')) {
        console.log('\n❌ TABLE EXISTS BUT MISSING COLUMNS');
        console.log('The products table exists but may be missing required columns.');
        console.log('Please check the table structure in Supabase dashboard.');
        return false;
      }
    }

    console.log('✅ Products table exists and is accessible');
    return true;

  } catch (err) {
    console.error('❌ Error checking table structure:', err.message);
    return false;
  }
};

checkTableStructure();