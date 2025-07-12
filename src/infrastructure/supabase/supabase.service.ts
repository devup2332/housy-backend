import { supabaseConfig } from '@/config/supabase.config';
import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      supabaseConfig.SUPABASE_URL,
      supabaseConfig.SUPABASE_ANON_KEY,
    );
  }

  get client() {
    return this.supabase;
  }
}
