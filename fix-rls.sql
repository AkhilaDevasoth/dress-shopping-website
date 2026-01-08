-- Fix Row Level Security for products table
-- Run this in Supabase SQL Editor

-- Disable RLS temporarily to allow seeding
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Or alternatively, create a policy that allows inserts for anonymous users (less secure but works for demo)
-- CREATE POLICY "Allow all operations for demo" ON products FOR ALL USING (true);