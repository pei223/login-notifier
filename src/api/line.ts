import ky from "https://esm.sh/ky";

const NOTIFY_API_URL = "https://notify-api.line.me/api/notify";

export const notifyToLine = async (accessToken: string, message: string) => {
  const body = new URLSearchParams({ message });
  return await ky.post(NOTIFY_API_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + accessToken,
    },
    body,
  }).json();
};
