# Supabase Setup Instructions

## IMPORTANT: Database Setup Required First

**You must complete the database setup before the application will work properly.**

## Step 1: Create the Products Table

1. Go to your Supabase dashboard at https://supabase.com/dashboard
2. Select your project
3. Go to the SQL Editor
4. Run this exact SQL command:

```sql
-- Create products table
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Step 2: Set Up Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **Create bucket**
3. Name it `product-images`
4. Make it **public** (check the "Public bucket" option)
5. Click **Create bucket**

## Step 3: Configure Storage Policies (Optional but Recommended)

In the SQL Editor, run:

```sql
-- Allow public access to product images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');

-- Allow authenticated users to upload images
CREATE POLICY "Allow uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images' AND auth.role() = 'authenticated');
```

## Step 4: Seed the Database

After creating the table, run the seed script:

```bash
cd backend
node seed.js
```

## Step 5: Start the Servers

### Backend:
```bash
cd backend
npm install
npm run dev
```

### Frontend:
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints Available

- `GET /api/products` - Get all products
- `GET /api/products/category/:category` - Get products by category (mens, womens, kids)
- `POST /api/products/upload-image` - Upload product image
- `POST /api/products` - Create new product

## Testing the Setup

1. Start both backend (port 5000) and frontend (port 5173)
2. Visit http://localhost:5173
3. You should see products loaded from Supabase instead of hard-coded data
4. Images should display properly from the URLs stored in the database

## Troubleshooting

- If you get "table doesn't exist" errors, make sure you ran the SQL to create the products table
- If images don't load, check that the image URLs in the database are valid
- If API calls fail, ensure the backend server is running on port 5000