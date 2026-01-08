const axios = require('axios');

const testAPI = async () => {
  try {
    console.log('🧪 Testing API endpoints...');

    // Test get all products
    const response = await axios.get('http://localhost:5000/api/products');
    console.log('✅ All products:', response.data.length, 'items');

    // Test get kids products
    const kidsResponse = await axios.get('http://localhost:5000/api/products/category/kids');
    console.log('✅ Kids products:', kidsResponse.data.length, 'items');

    // Test get mens products
    const mensResponse = await axios.get('http://localhost:5000/api/products/category/mens');
    console.log('✅ Mens products:', mensResponse.data.length, 'items');

    // Test get womens products
    const womensResponse = await axios.get('http://localhost:5000/api/products/category/womens');
    console.log('✅ Womens products:', womensResponse.data.length, 'items');

    // Test get home products
    const homeResponse = await axios.get('http://localhost:5000/api/products/category/home');
    console.log('✅ Home products:', homeResponse.data.length, 'items');

  } catch (error) {
    console.error('❌ API test failed:', error.response ? error.response.data : error.message);
  }
};

testAPI();