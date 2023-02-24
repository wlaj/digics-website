import React from "react";
import Head from "next/head";

export type MetaTagsProps = {
  data: {
    meta_title: string;
    meta_description: string;
    og_title: string;
    og_image: string;
    og_description: string;
    url: string;
  };
};

const MetaTags = ({ data }: MetaTagsProps) => {
  return (
    <Head>
      <title>{data.meta_title}</title>
      <meta name="description" content={data.meta_description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* Facebook */}
      <meta property="og:title" content={data.og_title} />
      <meta property="og:image" content={data.og_image} />
      <meta property="og:url" content={data.url} />
      <meta property="og:description" content={data.og_description} />
      {/* Twitter */}
      
    </Head>
  );
};

export default MetaTags;
