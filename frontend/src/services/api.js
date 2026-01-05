import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pdgxjpywacxvnvksmqbi.supabase.co";
const supabaseKey = "sb_publishable_LVY2oSSY1XjMI3XxDEIRNQ_uerh2GLN";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
