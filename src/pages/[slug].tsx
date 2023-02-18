import { getSinglePage, getPages } from "../utilities/pages";

type Props = {
  page: {
    title: string;
    html: string;
  };
};

const Page = ({ page }: Props) => {
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const pages = await getPages();

  const paths = pages.map((page: any) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const page = await getSinglePage(context.params.slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
  };
}
