import * as retry from "https://deno.land/x/retry@v2.0.0/mod.ts";
import ky from "https://esm.sh/ky";

const NOTIFY_API_URL = "https://notify-api.line.me/api/notify";

export const notifyToLineWithRetry = async (accessToken: string, message: string) => {
  let count = 0
  return await retry.retry(async () => {
    count += 1
    console.log(`Try to notify to line... : ${count}`)
    return await notifyToLine(accessToken, message)
  }, {
    maxTry: 10,
    delay: 10 * 1000,
  })
};


const notifyToLine = async (accessToken: string, message: string) => {
  const body = new URLSearchParams({ message });
  return await ky.post(NOTIFY_API_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + accessToken,
    },
    body,
  }).json();
};