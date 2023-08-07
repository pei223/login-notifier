import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const SettingSchema = z.object({
  url: z.string(),
  headers: z.record(z.string()),
})

export type Setting = z.infer<typeof SettingSchema>