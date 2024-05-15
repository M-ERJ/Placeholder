import { create } from "zustand";
import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/component";

interface SupabaseState {
  supabase: SupabaseClient | null;
  session: any;
  setSession: (session: any) => void;
}

export const useSupabaseStore = create<SupabaseState>((set) => ({
  supabase: createClient(),
  session: null,
  setSession: (session) => set({ session }),
}));
