export type PostProps = {
  post: {
    title: string;
    html: string;
    published_at: string;
    feature_image: string;
    feature_image_alt: string;
    excerpt: string;
    og_image: string;
    og_title: string;
    og_description: string;
    twitter_image: string;
    twitter_title: string;
    twitter_description: string;
    meta_title: string;
    meta_description: string;
    url: string;
  };
};

export type MetaTagsProps = {
  meta_title: string;
  meta_description: string;
  og_title: string;
  og_image: string;
  og_description: string;
  url: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
};

export type SettingsProps = {
  settings: {
    logo: string;
  };
};
