import { getSinglePost, getPosts } from "../../utilities/posts";
import { getSettings } from "../../utilities/settings";
import MetaTags, { MetaTagsProps} from "../../components/MetaTags";
import Navigation from "../../components/Navigation";

type Props = MetaTagsProps & {
  post: {
    title: string;
    html: string;
    published_at: string;
    feature_image: string;
    feature_image_alt: string;
  };
  settings: {
    logo: HTMLImageElement;
  };
};

const PostPage = ({ post, settings }: Props) => {
  return (
    <>
    <MetaTags data={post}  />
      <Navigation logo={settings.logo} settings={settings} />
      <div className="mx-auto w-[60rem]">
        <div className="mx-52 my-10">
          <p>{post.published_at}</p>
          <h1 className="text-5xl font-semibold">{post.title}</h1>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-xl"
          src={post.feature_image}
          alt={post.feature_image_alt}
        />
        <div className="mx-52 my-10">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </>
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
  const settings = await getSettings();

  if (!post) {
    return {
      notFound: true,
    };
  }

  if (!settings) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, settings },
  };
}
