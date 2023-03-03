import React from "react";
import Head from "next/head";
import { MetaTagsProps } from "../utilities/types";

const MetaTags = ({
  meta_title,
  meta_description,
  og_title,
  og_image,
  og_description,
  url,
  twitter_title,
  twitter_description,
  twitter_image,
}: MetaTagsProps) => {
  return (
    <Head>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* Facebook */}
      <meta property="og:title" content={og_title} />
      <meta property="og:image" content={og_image} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={og_description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Digics" />
      <meta name="twitter:title" content={twitter_title} />
      <meta name="twitter:description" content={twitter_description} />
      <meta name="twitter:image" content={twitter_image} />
    </Head>
  );
};

export default MetaTags;
