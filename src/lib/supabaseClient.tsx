import { createClient } from '@supabase/supabase-js';

type SupabaseConfig = {
    supabaseUrl: string;
    supabaseKey: string;
};

const supabaseConfig: SupabaseConfig = {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
};

const supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey);

export default supabase;


// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );