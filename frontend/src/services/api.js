import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pdgxjpywacxvnvksmqbi.supabase.co";
const supabaseKey = "sb_publishable_LVY2oSSY1XjMI3XxDEIRNQ_uerh2GLN";

export const supabase = createClient(supabaseUrl, supabaseKey);
export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select('*')
.order('created_at', { ascending: false })
.limit(10)

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data;
};
export const getProductsByCategory = async (category) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }

  return data;
};
getProductsByCategory("womens");
getProductsByCategory("mens");
getProductsByCategory("kids");
