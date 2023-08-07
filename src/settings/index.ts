import { Setting, SettingSchema } from "./types.ts";


export const readSetting = (filePath: string): Setting => {
  const decoder = new TextDecoder("utf-8")
  const rawData = Deno.readFileSync(filePath)
  const dataStr = decoder.decode(rawData)
  return SettingSchema.parse(JSON.parse(dataStr))
} 