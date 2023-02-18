import { contentApi } from "./ghost";

export async function getPosts() {
  return await contentApi.posts
    .browse({
      limit: "all",
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
