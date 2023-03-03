import { getSinglePage, getPages } from "../utilities/pages";
import PageContentSection from "../components/PageContentSection";

type Props = {
  page: {
    title: string;
    html: string;
  };
};

const Page = ({ page }: Props) => {
  return (
    <>
      <PageContentSection data={page} />
    </>
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