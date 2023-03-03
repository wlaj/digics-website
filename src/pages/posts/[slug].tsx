import { getSinglePost, getPosts } from "../../utilities/posts";
import { getSettings } from "../../utilities/settings";
import MetaTags from "../../components/MetaTags";
import Navigation from "../../components/Navigation";
import styles from "../../styles/Post.module.css";
import { MetaTagsProps, PostProps, SettingsProps } from "../../utilities/types";

type Props = MetaTagsProps & PostProps & SettingsProps;

const PostPage = ({ post, settings }: Props) => {
  return (
    <>
      <MetaTags
        meta_title={post.title}
        meta_description={post.meta_description}
        twitter_title={post.twitter_title}
        twitter_description={post.twitter_description}
        twitter_image={post.twitter_image}
        og_title={post.og_title}
        og_description={post.og_description}
        og_image={post.og_image}
        url={post.url}
      />
      <Navigation data={settings} />
      <div className={styles.postWrapper}>
        <div className="mx-52 my-10">
          <p>{post.published_at}</p>
          <h1>{post.title}</h1>
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
