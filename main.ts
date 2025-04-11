/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { kvOAuthPlugin } from "kv_oauth/fresh.ts";
import { oauth2Client } from "./utils/kv_oauth.ts";
import { kvInsightsPlugin } from 'https://deno.land/x/deno_kv_insights@v0.8.4-beta/mod.ts';

const connectionUrl = Deno.env.get("DENO_DEPLOYMENT_ID")
    ? undefined // Use Deno Deploy KV in production
    : Deno.env.get("DENO_KV_CONNECT_URL");
  
// Open the KV connection
const kv = await Deno.openKv(connectionUrl);

await start(manifest, { 
  plugins: [
    kvOAuthPlugin(oauth2Client),
    kvInsightsPlugin({ kv })
  ]
});
