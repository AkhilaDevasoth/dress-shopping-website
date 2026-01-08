const supabase = require('./config/supabaseClient');
const fs = require('fs');
const path = require('path');

const uploadImage = async (filePath, fileName) => {
  try {
    console.log(`📤 Uploading ${fileName}...`);

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Upload to Supabase Storage (bucket: 'products')
    const { data, error } = await supabase.storage
      .from('products') // Make sure this bucket exists in Supabase
      .upload(fileName, fileBuffer, {
        contentType: 'image/jpeg', // Adjust based on image type
        upsert: false
      });

    if (error) {
      console.error('❌ Upload failed:', error);
      return null;
    }

    console.log('✅ Upload successful:', data);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('products')
      .getPublicUrl(fileName);

    console.log('🔗 Public URL:', urlData.publicUrl);
    return urlData.publicUrl;

  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return null;
  }
};

// Example usage: Upload a single image
// Replace 'path/to/your/image.jpg' with actual path
const imagePath = 'path/to/your/image.jpg'; // Update this path
const imageName = 'example-image.jpg'; // Update this name

if (fs.existsSync(imagePath)) {
  uploadImage(imagePath, imageName);
} else {
  console.log('❌ Image file not found. Please update the imagePath variable.');
}

module.exports = { uploadImage };