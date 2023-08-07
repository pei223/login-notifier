import { join } from "https://deno.land/std@0.197.0/path/mod.ts";
import { delay } from "https://deno.land/x/delay@v0.2.0/mod.ts";
import { readSetting } from "./settings/index.ts";
import { notifyToLine } from "./api/line.ts";
import { genMessage } from "./log/message.ts";

const pauseSecondOnExit = 10;

const settingsFilePath = Deno.env.get("DEBUG") !== "true"
  ? join(Deno.execPath(), "..", "settings.json")
  : "./settings.json";

const exitWithPause = async (sleepMs: number, exitCode: number) => {
  console.log(`App exist (code: ${exitCode}). Wait ${sleepMs} ms.`);
  await delay(sleepMs);
  Deno.exit(exitCode);
};

try {
  console.log(`Read setting file... : ${settingsFilePath}`);
  const settings = readSetting(settingsFilePath);
  console.log("Read setting succeeded !");

  console.log("Notifying...");
  const message = genMessage();
  await notifyToLine(settings.accessToken, message);
  console.log("Notifying succeeded !");
} catch (e) {
  if (e instanceof Deno.errors.NotFound) {
    console.error("settings file was not found.");
    await exitWithPause(pauseSecondOnExit * 1000, 1);
  }
  console.error(`Unexpected error: ${e.message}`);
  await exitWithPause(pauseSecondOnExit * 1000, 1);
}

await exitWithPause(pauseSecondOnExit * 1000, 0);
