import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
const your_project_url = "https://fateqssjkxydqigzddvv.supabase.co";
const your_supabase_api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdGVxc3Nqa3h5ZHFpZ3pkZHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1NDc0MjMsImV4cCI6MjAxMjEyMzQyM30.IZsUsmOY-pUADNBkpIeLytUdYpZBE0jB2gp5YRKmrwU";

export const supabaseStorage = createClient(your_project_url, your_supabase_api_key);
