import { readFile, mkdir, access, writeFile } from "node:fs/promises";

// Materialize managed assets as ordinary public files for any hosting provider.
const origin = "https://alhamidi-legal-nexus.lovable.app";
await mkdir("public/brand", { recursive: true });
for (const name of ["logo-dark", "logo-light"]) {
  const pointer = JSON.parse(await readFile(`src/assets/${name}.png.asset.json`, "utf8"));
  const destination = `public/brand/${pointer.original_filename}`;
  try {
    await access(destination);
    continue;
  } catch {
    const response = await fetch(new URL(pointer.url, origin));
    if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
      throw new Error(`Unable to download ${name}: HTTP ${response.status}`);
    }
    await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
  }
}