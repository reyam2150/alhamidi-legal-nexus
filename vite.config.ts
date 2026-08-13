import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// On Vercel, Nitro must emit the Build Output API v3 folder (.vercel/output)
// instead of a standalone node server, otherwise the deployed function crashes
// with FUNCTION_INVOCATION_FAILED.
const isVercel = Boolean(process.env["VERCEL"]);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },
  },

  vite: {
    plugins: [
      nitro({
        preset: isVercel ? "vercel" : "node-server",
      }),
    ],
  },
});
