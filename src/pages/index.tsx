// @ts-ignore
import Head from "next/head";
import { Inter } from "@next/font/google";
import { getPosts } from "../utilities/posts";
import { Post } from "../utilities/types";

type Props = {
  posts: any
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({posts}: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex m-10">
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps(context: any) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}