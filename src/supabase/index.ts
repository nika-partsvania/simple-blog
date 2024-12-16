import { Database } from "@/supabase/database.types";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFub2VvY3phbWdid3lqeHB1dXJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzc1ODc1OCwiZXhwIjoyMDQ5MzM0NzU4fQ.NDBiPWHAy5AwILPrQaJt-f0-DkmBmEQ7FR9jUbbwbrs",
  // import.meta.env.VITE_SUPABASE_ANON_KEY,
);
