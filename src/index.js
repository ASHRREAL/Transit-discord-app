import { DiscordSDK } from "@discord/embedded-app-sdk";

const CLIENT_ID = "1407221432068477049";
const discordSdk = new DiscordSDK(CLIENT_ID);

async function init() {
  await discordSdk.ready();

  console.log("Discord Activity ready ✅");

  document.addEventListener("copy", async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text.includes("🟥") || text.includes("🟩") || text.includes("⬛")) {
        const today = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        const message = `${text} | ${today}`;
        discordSdk.commands.sendActivityMessage({ content: message });
        console.log("Posted result:", message);
      }
    } catch (err) {
      console.error("Clipboard read failed:", err);
    }
  });
}

init();
