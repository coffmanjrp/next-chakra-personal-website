import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blog';
import MDXComponents from '../../components/MDXComponents';

const Blog = ({ mdxSource, frontMatter }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
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
