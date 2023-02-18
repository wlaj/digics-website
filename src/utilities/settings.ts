import { contentApi } from "./ghost";

export async function getSettings() {
    return await contentApi.settings
      .browse()
      .catch((err: Error) => {
        console.error(err);
      });
  }