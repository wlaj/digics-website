import { contentApi } from "./ghost";

export async function getPages() {
    return await contentApi.pages
      .browse({
        limit: "all"
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
  
  export async function getSinglePage(pageSlug: string) {
    return await contentApi.pages
      .read({
        slug: pageSlug
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }