import { getSinglePost, getPosts } from "../../utilities/posts";

type Props = {
  post: {
    title: string;
    html: string;
  };
};

const PostPage = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}
