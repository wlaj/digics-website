import GhostContentAPI from "@tryghost/content-api"

export const contentApi = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
  version: "v5.0"
});

