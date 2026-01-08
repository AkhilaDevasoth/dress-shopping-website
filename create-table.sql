-- SQL Script to create the products table in Supabase
-- Run this in your Supabase SQL Editor

-- First, drop the table if it exists with wrong structure
DROP TABLE IF EXISTS products;

-- Create the products table with correct structure
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON products FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert (adjust as needed)
CREATE POLICY "Allow authenticated insert" ON products FOR INSERT WITH CHECK (auth.role() = 'authenticated');