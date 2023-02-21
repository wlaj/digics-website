import Link from "next/link";

type Props = {
  posts: any;
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`posts/${post.slug}`}>
            <p>{post.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      ))}
    </div>
  );
}
