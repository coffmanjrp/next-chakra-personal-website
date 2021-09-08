import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blog';
import MDXComponents from '../../components/MDXComponents';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = MDXRemote(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
};

export const getStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params.slug);

  return {
    props: post,
  };
};

export default Blog;
