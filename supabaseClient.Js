

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://kryanwhifaozovxsevyb.supabase.co/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeWFud2hpZmFvem92eHNldnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwOTIxMTcsImV4cCI6MjAzMjY2ODExN30.K-ojKBB-Mr1wfW_MjM5DpLcXjPqdCT2ewfyGaW64MR0";


export const supabase = createClient(supabaseUrl, supabaseKey);
