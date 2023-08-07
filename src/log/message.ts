export const genMessage = () => {
  return `
ログインがありました。
OS: ${Deno.build.os}
ホームディレクトリ: ${Deno.env.get("HOME")}
日時: ${new Date().toLocaleString("jp-JP")}`;
};
