import { join } from "https://deno.land/std@0.197.0/path/mod.ts";
import { delay } from 'https://deno.land/x/delay@v0.2.0/mod.ts';
import { createApi } from "./api/base.ts";
import { readSetting } from "./settings/index.ts";



const settingsFilePath = Deno.env.get("DEBUG") !== "true" ? join(Deno.execPath(), "..", "settings.json") : "./settings.json"

const exit = async (sleepMs: number, exitVal: number) => {
  await delay(sleepMs);
  Deno.exit(exitVal)
}

try {
  console.log(`Read setting file... : ${settingsFilePath}`)
  const v = readSetting(settingsFilePath)
  console.log("Read setting succeeded !")

  const api = createApi(v.url, v.headers)

} catch (e) {
  if (e instanceof Deno.errors.NotFound) {
    console.error("settings file was not found.")
    await exit(50000, 1)
  }
  console.log(e.type)
  await exit(50000, 1)
}


await exit(50000, 0)
