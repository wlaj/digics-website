import Link from "next/link";
import Image from "next/image";

type Props = {
  posts: any;
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="grid mx-3 my-48 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8">
      {posts.map((post: any) => (
        <div key={post.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-lg w-auto" src={post.feature_image} alt={post.feature_image_alt} />
          <Link href={`posts/${post.slug}`}>
            <h4 className="font-semibold text-xl py-2">{post.title}</h4>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
