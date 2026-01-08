const supabase = require('./config/supabaseClient');

const fixRLS = async () => {
  try {
    console.log('🔧 Fixing Row Level Security...');

    // Try to disable RLS
    const { error } = await supabase.rpc('alter_table_disable_rls', {
      table_name: 'products'
    });

    if (error) {
      console.log('❌ Could not disable RLS via RPC. Please run this SQL in Supabase dashboard:');
      console.log('ALTER TABLE products DISABLE ROW LEVEL SECURITY;');
      return false;
    }

    console.log('✅ RLS disabled successfully');
    return true;

  } catch (err) {
    console.log('❌ Error fixing RLS:', err.message);
    console.log('Please run this SQL in Supabase dashboard:');
    console.log('ALTER TABLE products DISABLE ROW LEVEL SECURITY;');
    return false;
  }
};

fixRLS();