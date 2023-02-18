import { contentApi } from "./ghost";

export async function getPosts() {
  return await contentApi.posts
    .browse({
      limit: "all",
      include: 'tags, authors'
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await contentApi.posts
    .read({
      slug: postSlug
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
